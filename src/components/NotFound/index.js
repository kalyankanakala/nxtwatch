import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import ThemeContext from '../../context/themeContext'

import {Page, Body, Content, Image} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {theme} = value
      const classTheme = theme === 'light' || false
      return (
        <Page outline={classTheme}>
          <Header />
          <Body>
            <SideBarMenu />
            <Content>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
              <h1>Page Not Found</h1>
              <p>We are sorry, the page you requested could not be found.</p>
            </Content>
          </Body>
        </Page>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
