import styled from 'styled-components'

export const HomeVideosContainer = styled.div`
  //   display: flex;
  //   flex-direction: column;
  width: 100%;
  margin-right: 20px;
  margin-bottom: 30px;
  background-size: cover;
  @media screen and (max-width: 575px) {
    width: 575px;
  }
`
export const ThumbNailUrl = styled.img`
  @media screen and (max-width: 575px) {
    width: 575px;
  }
`

export const ProfileImageUrl = styled.img`
  width: 50px;
  height: 65px;
  padding-top: 5px;
`
export const ChannelSection = styled.div`
  display: flex;
  padding-top: 0px;
  margin-top: 0px;
`
export const Paragraph = styled.p`
  font-weight: bold;
  color: #616e7c;
  padding-left: 10px;
  margin-bottom: 0px;
`
export const DetailsSection = styled.div`
  display: flex;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
