import styled from 'styled-components'

export const PremiumSubscriptionConatiner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding-top: 30px;
  padding-bottom: 50px;
  padding-left: 15px;
  height: 30vh;
  flex-grow: 1;
  background-color: ${props => (props.outline ? '#ffffff' : '#000000')};
  color: ${props => (props.outline ? '#000000' : '#ffffff')};
  @media screen and (max-width: 575px) {
    width: 575px;
  }
`

export const Image = styled.img`
  width: 125px;
  height: 30px;
`

export const Heading = styled.h2`
  color: #94a3b8;
  margin-bottom: 20px;
`

export const Button = styled.button`
  height: 35px;
  width: 120px;
  background-color: transparent;
  font-size: 16px;
  margin-top: 20px;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const IconButton = styled.div`
  background-color: transparent;
  border-style: none;
`
