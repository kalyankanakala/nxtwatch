import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  height: 100vh;
  width: 100%;
  background-size: cover;
  padding: 40px;
  background-color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
  color: ${props => (props.outline ? '#000000' : '#ffffff')};
`

export const Form = styled.form`
  background-color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
  color: ${props => (props.outline ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  box-shadow: 10px;
  padding: 30px;
  border-radius: 5px;
`

export const LogoImage = styled.img`
  height: 60px;
  width: 200px;
  align-self: center;
  margin-bottom: 35px;
`

export const Label = styled.label`
  color: #313131;
  font-weight: bold;
`

export const Input = styled.input`
  margin-bottom: 15px;
  height: 25px;
`

export const Button = styled.button`
  background-color: #3b82f6;
  height: 35px;
  color: #ffffff;
  font-weight: bold;
  border-style: none;
  border-radius: 5px;
`
export const Para = styled.p`
  color: #ff0000;
`
