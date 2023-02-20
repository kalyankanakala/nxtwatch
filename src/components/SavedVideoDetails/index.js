import {
  TrendingVideosMainContainer,
  Image,
  TrendingVideosContentContainer,
} from './styledComponents'

const SavedVideoDetails = props => {
  const {savedVideos} = props
  console.log('savedVideos', savedVideos)
  return (
    <TrendingVideosMainContainer>
      <Image src={savedVideos.thumbnailUrl} />
      <TrendingVideosContentContainer>
        <h1>{savedVideos.name}</h1>
        <h4>{savedVideos.title}</h4>
        <div>
          <p>{savedVideos.view_count}</p>
          <p>{savedVideos.published_at}</p>
        </div>
      </TrendingVideosContentContainer>
    </TrendingVideosMainContainer>
  )
}

export default SavedVideoDetails
