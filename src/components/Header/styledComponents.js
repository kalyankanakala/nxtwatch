import styled from 'styled-components'

export const Image = styled.img`
  height: 35px;
  width: 175px;
`

export const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${props => (props.outline ? '#ffffff' : '#000000')};
  color: ${props => (props.outline ? '#000000' : '#ffffff')};
  @media screen and (max-width: 576px) {
    width: 575px;
    padding-left: 0px;
  }
`
export const NavElements = styled.li`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`
export const Button = styled.button`
  background-color: #ffffff;
  color: #3b82f6;
  height: 30px;
  width: 100px;
  border-style: solid;
  border-color: #3b82f6;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const Page = styled.div`
  background-color: #000000;
`
export const ProfileImage = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
