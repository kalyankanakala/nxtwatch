import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import {
  Page,
  Body,
  Content,
  Input,
  Container,
  Button,
  ImageNoDataFound,
  NotFoundDiv,
} from './styledComponents'
import ThemeContext from '../../context/themeContext'
import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import PremiumSubscription from '../PremiumSubscription'
import HomeVideos from '../HomeVideos'

const homeApiStatusConsts = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
  notFound: 'NOTFOUND',
}

class Home extends Component {
  state = {
    homeData: [],
    searchValue: '',
    homeApiStatus: homeApiStatusConsts.initial,
  }

  componentDidMount() {
    this.homeVideos()
  }

  onChangeSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  onClickSearchValue = () => {
    this.homeVideos()
  }

  onSuccess = () => {
    const {homeData} = this.state
    return (
      <>
        {homeData.map(homeVideos => (
          <Container key={homeVideos.id}>
            <HomeVideos homeData={homeVideos} id={homeVideos.id} />
          </Container>
        ))}
      </>
    )
  }

  onRetry = () => this.homeVideos()

  onFailure = classTheme => (
    <div>
      <input />
      <div>
        {classTheme ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure view"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
            alt="failure view"
          />
        )}
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request. Please try again.
        </p>
        <button type="button" onClick={this.onRetry}>
          Retry
        </button>
      </div>
    </div>
  )

  onLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onNotFound = () => (
    <NotFoundDiv>
      <ImageNoDataFound
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <h1>No Search results found</h1>
      <p>Try different key words or remove search filter</p>
      <Button onClick={this.homeVideos}>Retry</Button>
    </NotFoundDiv>
  )

  homeSwitch = (homeApiStatus, classTheme) => {
    switch (homeApiStatus) {
      case 'SUCCESS':
        return this.onSuccess()
      case 'FAILURE':
        return this.onFailure(classTheme)
      case 'INPROGRESS':
        return this.onLoading()
      case 'NOTFOUND':
        return this.onNotFound()
      default:
        return null
    }
  }

  homeVideos = async () => {
    const {searchValue} = this.state
    this.setState({homeApiStatus: homeApiStatusConsts.inProgress})
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      if (fetchedData.videos.length === 0 || !fetchedData.videos) {
        this.setState({homeApiStatus: homeApiStatusConsts.notFound})
        return
      }
      const updatedData = fetchedData.videos.map(homeData => ({
        name: homeData.channel.name,
        profileImageUrl: homeData.channel.profile_image_url,
        id: homeData.id,
        publishedAt: homeData.published_at,
        thumbnailUrl: homeData.thumbnail_url,
        title: homeData.title,
        viewCount: homeData.view_count,
      }))
      this.setState({
        homeData: updatedData,
        homeApiStatus: homeApiStatusConsts.success,
      })
    } else {
      this.setState({homeApiStatus: homeApiStatusConsts.failure})
    }
  }

  render() {
    const {searchValue, homeApiStatus} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          const classTheme = theme === 'light' || false
          return (
            <>
              <Header />
              <Page outline={classTheme} data-testid="home">
                <Body>
                  <SideBarMenu />
                  <Content>
                    <PremiumSubscription />
                    <div>
                      <Input
                        placeholder="search"
                        type="text"
                        value={searchValue}
                        onChange={this.onChangeSearchValue}
                      />
                      <Button
                        onClick={this.onClickSearchValue}
                        data-testid="searchButton"
                      >
                        <BsSearch />
                      </Button>

                      {this.homeSwitch(homeApiStatus, classTheme)}
                    </div>
                  </Content>
                </Body>
              </Page>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
