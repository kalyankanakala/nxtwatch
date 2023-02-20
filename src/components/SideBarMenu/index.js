import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdOutlinePlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/themeContext'

import {
  LeftPane,
  RouteContainer,
  Heading,
  SocialMediaImage,
  FooterContainer,
} from './styledComponents'

class SideBarMenu extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {values => {
          const {theme} = values
          const classTheme = theme === 'light' || false
          return (
            <LeftPane outline={classTheme}>
              <div>
                <Link to="/">
                  <RouteContainer outline={classTheme}>
                    <AiFillHome />
                    <Heading>Home</Heading>
                  </RouteContainer>
                </Link>
                <Link to="/trending">
                  <RouteContainer>
                    <HiFire />
                    <Heading>Trending</Heading>
                  </RouteContainer>
                </Link>
                <Link to="/gaming">
                  <RouteContainer>
                    <SiYoutubegaming />
                    <Heading>Gaming</Heading>
                  </RouteContainer>
                </Link>
                <Link to="/saved-videos">
                  <RouteContainer>
                    <MdOutlinePlaylistAdd />
                    <Heading>Saved Videos</Heading>
                  </RouteContainer>
                </Link>
              </div>
              <FooterContainer>
                <Heading>CONTACT US</Heading>
                <div>
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </div>
                <Heading>
                  Enjoy! Now to see your channels and recommendations!
                  {/* Enjoy! Now to see your <br />
                  channels and <br />
                  recommendations! */}
                </Heading>
              </FooterContainer>
            </LeftPane>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(SideBarMenu)
