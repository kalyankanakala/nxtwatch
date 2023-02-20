import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import {Page, Body, Content, Div, H1} from './styledComponents'
import ThemeContext from '../../context/themeContext'

import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import TrendingVideos from '../TrendingVideos'

import './index.css'

const trendingApiStatusConsts = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Trending extends Component {
  state = {
    trendingData: [],
    trendingApiStatus: trendingApiStatusConsts.initial,
  }

  componentDidMount() {
    this.trendingVideos()
  }

  onTrendingSuccess = () => {
    const {trendingData} = this.state
    return (
      <>
        {trendingData.map(trending => (
          <TrendingVideos trendingData={trending} key={trending.id} />
        ))}
      </>
    )
  }

  onRetry = () => this.trendingVideos()

  onTrendingFailure = classTheme => (
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

  onTrendingLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  trendingSwitch = (trendingApiStatus, classTheme) => {
    switch (trendingApiStatus) {
      case 'SUCCESS':
        return this.onTrendingSuccess()
      case 'FAILURE':
        return this.onTrendingFailure(classTheme)
      case 'INPROGRESS':
        return this.onTrendingLoading()
      default:
        return null
    }
  }

  trendingVideos = async () => {
    this.setState({trendingApiStatus: trendingApiStatusConsts.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log('trendindData', fetchedData)
      const updatedData = fetchedData.videos.map(video => ({
        channel: video.channel,
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({
        trendingData: updatedData,
        trendingApiStatus: trendingApiStatusConsts.success,
      })
    } else {
      this.setState({
        trendingApiStatus: trendingApiStatusConsts.failure,
      })
    }
  }

  render() {
    const {trendingApiStatus} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          const classTheme = theme === 'light' || false
          return (
            <>
              <Header />
              <Page outline={classTheme} data-testid="trending">
                <Body>
                  <SideBarMenu />
                  <Content>
                    <Div outline={classTheme} data-testid="banner">
                      <HiFire className="trendingIcon" />
                      <H1>Trending</H1>
                    </Div>
                    {this.trendingSwitch(trendingApiStatus, classTheme)}
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

export default Trending
