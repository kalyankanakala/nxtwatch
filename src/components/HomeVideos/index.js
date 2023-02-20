import {Link} from 'react-router-dom'
import {
  HomeVideosContainer,
  ThumbNailUrl,
  ProfileImageUrl,
  ChannelSection,
  Paragraph,
  DetailsSection,
  ContentSection,
} from './styledComponents'

const HomeVideos = props => {
  const {homeData} = props

  return (
    <HomeVideosContainer>
      <Link to={`/videos/${homeData.id}`}>
        <ThumbNailUrl src={homeData.thumbnailUrl} alt="video thumbnail" />
      </Link>
      <ChannelSection>
        <ProfileImageUrl src={homeData.profileImageUrl} alt="channel logo" />
        <ContentSection>
          <Paragraph>{homeData.title}</Paragraph>
          <Paragraph>{homeData.name}</Paragraph>
          <DetailsSection>
            <Paragraph>{homeData.viewCount}</Paragraph>
            <Paragraph>.</Paragraph>
            <Paragraph>{homeData.publishedAt}</Paragraph>
          </DetailsSection>
        </ContentSection>
      </ChannelSection>
    </HomeVideosContainer>
  )
}

export default HomeVideos
