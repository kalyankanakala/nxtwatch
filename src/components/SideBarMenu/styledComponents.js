import styled from 'styled-components'

export const LeftPane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  max-width: 20%;
  padding-top: 25px;
  background-color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const RouteContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 35px;
  margin-bottom: 5px;
  color: ${props => (props.outline ? '#0f0f0f' : '#606060')};
`

export const Heading = styled.p`
  color: #606060;
`
export const SocialMediaImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const FooterContainer = styled.div`
  padding-left: 30px;
`
