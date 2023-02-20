import styled from 'styled-components'

export const Page = styled.div`
  width: 100%;
  background-color: ${props => (props.outline ? '#f9f9f9' : '#181818')};
  color: ${props => (props.outline ? '#181818' : '#f9f9f9')};
  @media screen and (max-width: 575px) {
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
`

export const Content = styled.div`
  width: 100%;
  @media screen and (max-width: 575px) {
    width: 575px;
  }
`
export const Input = styled.input`
  margin-bottom: 25px;
  width: 350px;
  height: 25px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const Button = styled.button`
  height: 25px;
  width: 65px;
`
export const ImageNoDataFound = styled.img`
  width: 500px;
  height: 600px;
`
export const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
