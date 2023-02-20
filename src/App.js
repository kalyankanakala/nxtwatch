import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import SavedVideoContext from './context/savedVideoContext'
import ThemeContext from './context/themeContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import './App.css'

// Replace your code here
class App extends Component {
  state = {savedVideos: [], theme: 'light'}

  changeTheme = e => this.setState({theme: e})

  saveVideo = e => this.setState({savedVideos: e})

  render() {
    const {savedVideos, theme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <SavedVideoContext.Provider
            value={{
              savedVideos,
              unSaveVideo: this.saveVideo,
            }}
          >
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />

            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
          </SavedVideoContext.Provider>
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
