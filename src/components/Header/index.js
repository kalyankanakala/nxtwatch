import {withRouter, Link} from 'react-router-dom'
import {MdDarkMode, MdOutlineLightMode} from 'react-icons/md'

import ThemeContext from '../../context/themeContext'
import {NavContainer, NavElements, ProfileImage} from './styledComponents'

import LogoutPopup from '../LogoutPopup'
import MenuPopup from '../MenuPopup'

import './index.css'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {theme, changeTheme} = value

      const onChangeTheme = () => {
        let them = theme

        if (them === 'light') {
          them = 'dark'
          console.log('theme')
        } else {
          them = 'light'
        }

        return changeTheme(them)
      }

      const classTheme = theme === 'light' || false
      return (
        <NavContainer outline={classTheme}>
          {classTheme ? (
            <Link to="/">
              <img
                className="webSiteLogo"
                alt="website logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              />
            </Link>
          ) : (
            <Link to="/">
              <img
                className="webSiteLogo"
                alt="website logo"
                src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              />
            </Link>
          )}
          <NavElements>
            {theme === 'light' ? (
              <button type="button" data-testid="theme">
                <MdDarkMode className="icn" onClick={onChangeTheme} />
              </button>
            ) : (
              <button type="button" data-testid="theme">
                <MdOutlineLightMode className="icn" onClick={onChangeTheme} />
              </button>
            )}
            <ProfileImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />

            <MenuPopup />
            <LogoutPopup />
          </NavElements>
        </NavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
