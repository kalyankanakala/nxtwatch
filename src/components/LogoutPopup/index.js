import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {MdLogout} from 'react-icons/md'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/themeContext'
import './index.css'

const LogoutPopup = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        const classTheme = theme === 'light' || false
        return (
          <Popup
            modal
            trigger={
              <button type="button">
                <span className="logout-button">Logout</span>
                <MdLogout className="logout-icon" />
              </button>
            }
          >
            {close => (
              <>
                <div
                  className={
                    classTheme ? 'popup-content-light' : 'popup-content-dark'
                  }
                >
                  <h1 className="popup-heading">
                    Are you sure, you want to logout
                  </h1>
                  <div className="button-container">
                    <button
                      className="cancel-button"
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="confirm-button"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </>
            )}
          </Popup>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(LogoutPopup)

// className="popup-content"
