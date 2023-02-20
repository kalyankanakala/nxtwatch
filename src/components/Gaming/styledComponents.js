import styled from 'styled-components'

export const Page = styled.div`
  background-color: ${props => (props.outline ? ' #f9f9f9' : '#0f0f0f')};
  color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.outline ? '#ebebeb' : '#000000')};
`
export const H1 = styled.h1`
  margin-left: 15px;
`

export const VideoContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
