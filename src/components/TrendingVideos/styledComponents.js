import styled from 'styled-components'

export const TrendingVideosMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: 400px;
  height: 250px;
`

export const TrendingVideosContentContainer = styled.div`
  margin-left: 25px;
`
export const Div = styled.div`
  display: flex;
  flex-direction: row;
`
