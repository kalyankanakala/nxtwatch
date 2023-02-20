import {Link, withRouter} from 'react-router-dom'
import {AiFillHome, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdOutlinePlaylistAdd} from 'react-icons/md'
import Popup from 'reactjs-popup'

import ThemeContext from '../../context/themeContext'
import {RouteContainer, Heading} from './styledComponents'
import './index.css'

const MenuPopup = () => (
  <ThemeContext.Consumer>
    {value => {
      const {theme} = value
      const classTheme = theme === 'light' || false
      return (
        <Popup modal trigger={<AiOutlineMenu className="menu-icon " />}>
          {close => (
            <>
              <div
                className={
                  classTheme
                    ? 'menu-popup-content-light'
                    : 'menu-popup-content-dark'
                }
              >
                <button onClick={() => close()} type="button">
                  <AiOutlineClose />
                </button>

                <div>
                  <Link to="/">
                    <RouteContainer>
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
              </div>
            </>
          )}
        </Popup>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(MenuPopup)

// className="popup-content"
