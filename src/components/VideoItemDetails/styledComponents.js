import styled from 'styled-components'

export const Page = styled.div`
  background-color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
  color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
`

export const Content = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  background-size: cover;
  background-color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
  color: ${props => (props.outline ? '#000000' : '#ffffff')};
  @media screen and (max-width: 575px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`

export const VideoDetailsFooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoImage = styled.img`
  width: 100%;
`
export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
`
export const CompanyProfile = styled.div`
  display: flex;
  flex-direction: row;
`
export const CompanyProfileContent = styled.div`
  margin-left: 25px;
`
export const ContainerLike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  color: ${props => (props.colorLikeChange ? '#2563eb' : '#64748b')};
`
export const ContainerDisLike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  color: ${props => (props.colorDislikeChange ? '#2563eb' : '#64748b')};
`
export const ContainerSave = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;

  color: ${props => (props.colorSaveChange ? '#2563eb' : '#64748b')};
`
