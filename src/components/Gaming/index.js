import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../context/themeContext'

import {Page, Body, Content, Div, H1, VideoContainer} from './styledComponents'

import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import GamingVideos from '../GamingVideos'

import './index.css'

const gamingApiStatusConsts = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {gameVideos: [], gamingApiStatus: gamingApiStatusConsts.initial}

  componentDidMount() {
    this.gameVideos()
  }

  onGamingSuccess = () => {
    const {gameVideos} = this.state
    return (
      <VideoContainer>
        {gameVideos.map(videos => (
          <Link to={`/videos/${videos.id}`} key={videos.id}>
            <GamingVideos gameVideos={videos} />
          </Link>
        ))}
      </VideoContainer>
    )
  }

  onRetry = () => this.gameVideos()

  onGamingFailure = classTheme => (
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

  onGamingLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  gamingSwitch = (gamingApiStatus, classTheme) => {
    switch (gamingApiStatus) {
      case 'SUCCESS':
        return this.onGamingSuccess()
      case 'FAILURE':
        return this.onGamingFailure(classTheme)
      case 'INPROGRESS':
        return this.onGamingLoading()
      default:
        return null
    }
  }

  gameVideos = async () => {
    this.setState({gamingApiStatus: gamingApiStatusConsts.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log('gamingData', data)
      const updatedData = data.videos.map(video => ({
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({
        gameVideos: updatedData,
        gamingApiStatus: gamingApiStatusConsts.success,
      })
    } else {
      this.setState({
        gamingApiStatus: gamingApiStatusConsts.failure,
      })
    }
  }

  render() {
    const {gamingApiStatus} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          const classTheme = theme === 'light' || false
          return (
            <Page outline={classTheme} data-testid="gaming">
              <Header />
              <Body>
                <SideBarMenu />
                <Content>
                  <Div outline={classTheme} data-testid="banner">
                    <SiYoutubegaming className="trendingIcon" />
                    <H1>Gaming</H1>
                  </Div>
                  {this.gamingSwitch(gamingApiStatus, classTheme)}
                </Content>
              </Body>
            </Page>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
