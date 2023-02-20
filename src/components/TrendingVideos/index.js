import {Link} from 'react-router-dom'
import {
  TrendingVideosMainContainer,
  Image,
  TrendingVideosContentContainer,
  Div,
} from './styledComponents'

const TrendingVideos = props => {
  const {trendingData} = props
  return (
    <TrendingVideosMainContainer>
      <Link to={`/videos/${trendingData.id}`}>
        <Image src={trendingData.thumbnailUrl} alt="video thumbnail" />
      </Link>
      <TrendingVideosContentContainer>
        <h1>{trendingData.title}</h1>
        <h4>{trendingData.channel.name}</h4>
        <Div>
          <p>{trendingData.viewCount}</p>
          <p>{trendingData.publishedAt}</p>
        </Div>
      </TrendingVideosContentContainer>
    </TrendingVideosMainContainer>
  )
}

export default TrendingVideos
