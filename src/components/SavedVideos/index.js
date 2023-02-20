import {Component} from 'react'
import {Link} from 'react-router-dom'
import {MdOutlinePlaylistAdd} from 'react-icons/md'
import SavedVideoContext from '../../context/savedVideoContext'
import ThemeContext from '../../context/themeContext'

import {
  Page,
  Body,
  Content,
  Div,
  H1,
  TrendingVideosMainContainer,
  Image,
  TrendingVideosContentContainer,
} from './styledComponents'

import Header from '../Header'
import SideBarMenu from '../SideBarMenu'

import './index.css'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {values => {
          const {theme} = values
          const classTheme = theme === 'light' || false

          return (
            <SavedVideoContext.Consumer>
              {value => {
                console.log('value', value)
                const {savedVideos} = value

                return (
                  <Page outline={classTheme} data-testid="savedVideos">
                    <Header />
                    <Body>
                      <SideBarMenu />
                      <Content>
                        <Div outline={classTheme} data-testid="banner">
                          <MdOutlinePlaylistAdd className="trendingIcon" />
                          <H1>SavedVideos</H1>
                        </Div>
                        {savedVideos.length === 0 ? (
                          <div className="nosaved-div">
                            <img
                              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                              alt="not found"
                              className="no-saved-image"
                            />
                            <h1>No saved Videos Found</h1>
                            <p>You can save your videos while watching them</p>
                          </div>
                        ) : (
                          savedVideos &&
                          savedVideos.map(list => (
                            <Link to={`/videos/${list.id}`} key={list.id}>
                              <TrendingVideosMainContainer>
                                <Image
                                  src={list.thumbnailUrl}
                                  alt="video thumbnail"
                                />
                                <TrendingVideosContentContainer>
                                  <h1>{list.name}</h1>
                                  <h4>{list.title}</h4>
                                  <div>
                                    <p>{list.view_count}</p>
                                    <p>{list.published_at}</p>
                                  </div>
                                </TrendingVideosContentContainer>
                              </TrendingVideosMainContainer>
                            </Link>
                          ))
                        )}
                      </Content>
                    </Body>
                  </Page>
                )
              }}
            </SavedVideoContext.Consumer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
