import {Component} from 'react'

import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {MdOutlinePlaylistAdd} from 'react-icons/md'
import SavedVideoContext from '../../context/savedVideoContext'
import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import ThemeContext from '../../context/themeContext'
import {
  Page,
  Body,
  Content,
  VideoDetailsFooterSection,
  DateContainer,
  LikeContainer,
  ProfileImage,
  CompanyProfile,
  CompanyProfileContent,
  ContainerLike,
  ContainerDisLike,
  ContainerSave,
} from './styledComponents'

class VideoItemDetails extends Component {
  state = {
    videoDetail: {},
    likeColor: false,
    dislikeColor: false,
  }

  componentDidMount() {
    this.getDetailVideos()
  }

  onLike = () => {
    const {likeColor, dislikeColor} = this.state
    if (dislikeColor === true) {
      this.setState({dislikeColor: false})
    }

    this.setState({likeColor: !likeColor})
  }

  onDislike = () => {
    const {likeColor, dislikeColor} = this.state

    if (likeColor === true) {
      this.setState({likeColor: false})
    }

    this.setState({dislikeColor: !dislikeColor})
  }

  getDetailVideos = async () => {
    const {match} = this.props
    const {params} = match
    const jwtToken = Cookies.get('jwt_token')
    console.log('this.props', params.id)
    const url = `https://apis.ccbp.in/videos/${params.id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log('kalyan', data)
    if (response.ok === true) {
      const updatedData = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: formatDistanceToNow(
          new Date(data.video_details.published_at),
        ),
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({videoDetail: updatedData})
    }
  }

  render() {
    const {videoDetail, likeColor, dislikeColor} = this.state
    return (
      <ThemeContext.Consumer>
        {values => {
          const {theme} = values
          const classTheme = theme === 'light' || false

          return (
            <Page outline={classTheme} data-testid="videoItemDetails">
              <Header />
              <Body>
                <SideBarMenu />
                <Content outline={classTheme}>
                  <div>
                    <ReactPlayer
                      url={videoDetail.videoUrl}
                      width="100%"
                      height="560px"
                    />
                    <h1>{videoDetail.title}</h1>

                    <VideoDetailsFooterSection>
                      <DateContainer>
                        <p>{videoDetail.subscriberCount}</p> &nbsp;
                        <p>
                          <b>.</b>
                          {videoDetail.publishedAt}
                        </p>
                      </DateContainer>
                      <LikeContainer>
                        <ContainerLike
                          colorLikeChange={likeColor}
                          onClick={this.onLike}
                        >
                          <AiOutlineLike />
                          <p>Like</p>
                        </ContainerLike>

                        <ContainerDisLike
                          colorDislikeChange={dislikeColor}
                          onClick={this.onDislike}
                        >
                          <BiDislike />
                          <p>DisLike</p>
                        </ContainerDisLike>
                        <SavedVideoContext.Consumer>
                          {value => {
                            const {unSaveVideo, savedVideos} = value
                            const onSave = () => {
                              const objWithIdIndex = savedVideos.findIndex(
                                obj => obj.id === videoDetail.id,
                              )

                              if (objWithIdIndex >= 0) {
                                savedVideos.splice(objWithIdIndex, 1)
                              } else {
                                savedVideos.push(videoDetail)
                              }

                              unSaveVideo(savedVideos)
                            }
                            const saveVideoExist = savedVideos.some(
                              e => e.id === videoDetail.id,
                            )
                            return (
                              <ContainerSave
                                colorSaveChange={saveVideoExist}
                                onClick={onSave}
                              >
                                <MdOutlinePlaylistAdd />
                                <p> {saveVideoExist ? 'Saved' : 'Save'}</p>
                              </ContainerSave>
                            )
                          }}
                        </SavedVideoContext.Consumer>
                      </LikeContainer>
                    </VideoDetailsFooterSection>
                    <CompanyProfile>
                      <ProfileImage src={videoDetail.profileImageUrl} />
                      <CompanyProfileContent>
                        <h4>{videoDetail.name}</h4>
                        <h4>{videoDetail.viewCount}</h4>
                        <p>{videoDetail.description}</p>
                      </CompanyProfileContent>
                    </CompanyProfile>
                  </div>
                </Content>
              </Body>
            </Page>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
