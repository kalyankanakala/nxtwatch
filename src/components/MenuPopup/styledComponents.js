import styled from 'styled-components'

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
