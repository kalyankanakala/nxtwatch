import React from 'react'

const SavedVideoContext = React.createContext({
  savedVideos: [],
  unSaveVideo: () => {},
})

export default SavedVideoContext
