import styled from 'styled-components'

export const Page = styled.div`
  background-color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
  color: ${props => (props.outline ? '#000000' : '#ffffff')};
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const Image = styled.img`
  height: 500px;
`
