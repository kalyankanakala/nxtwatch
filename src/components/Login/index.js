import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LogoImage,
  Label,
  Input,
  Button,
  Form,
  Page,
  Para,
} from './styledComponents'
import ThemeContext from '../../context/themeContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errMessage: '',
    showSubmitError: false,
    passwordType: 'password',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    console.log('history', history)
    return history.replace('/')
  }

  onSubmitFailure = errMessage => {
    this.setState({showSubmitError: true, errMessage})
  }

  onTogglePassword = () => {
    const {passwordType} = this.state
    if (passwordType === 'password') {
      this.setState({passwordType: 'text'})
      return
    }
    this.setState({passwordType: 'password'})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log('Response', response)
    console.log('Data', data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      errMessage,
      showSubmitError,
      passwordType,
    } = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          const classTheme = theme === 'light' || false
          return (
            <Page outline={classTheme}>
              <Form onSubmit={this.onSubmitForm} outline={classTheme}>
                {classTheme ? (
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <LogoImage
                    src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                )}
                <Label htmlFor="username">USERNAME</Label>
                <Input
                  type="text"
                  id="username"
                  value={username}
                  onChange={this.onChangeUsername}
                />
                <Label htmlFor="password">PASSWORD</Label>
                <Input
                  type={passwordType}
                  id="password"
                  value={password}
                  onChange={this.onChangePassword}
                />
                <div>
                  <Input
                    type="checkbox"
                    id="checkboxPassword"
                    onChange={this.onTogglePassword}
                  />
                  <Label htmlFor="checkboxPassword">Show Password</Label>
                </div>
                <Button type="submit">Login</Button>
                {showSubmitError && <Para>*{errMessage}</Para>}
              </Form>
            </Page>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
