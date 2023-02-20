import {GamingVideosMainContainer, Image} from './styledComponents'

const GamingVideos = props => {
  const {gameVideos} = props
  return (
    <GamingVideosMainContainer>
      <Image src={gameVideos.thumbnailUrl} alt="video thumbnail" />
      <div>
        <h1>{gameVideos.title}</h1>
        <h4>{gameVideos.viewCount}</h4>
      </div>
    </GamingVideosMainContainer>
  )
}

export default GamingVideos
