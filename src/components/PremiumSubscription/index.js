import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'

import {
  PremiumSubscriptionConatiner,
  Button,
  Image,
  Heading,
  HeaderContainer,
  IconButton,
} from './styledComponents'

import './index.css'

class PremiumSubscription extends Component {
  state = {close: true}

  onClickCloseBanner = () => {
    this.setState({close: false})
  }

  render() {
    const {close} = this.state
    return (
      <>
        {close ? (
          <PremiumSubscriptionConatiner data-testid="banner">
            <HeaderContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />

              <IconButton onClick={this.onClickCloseBanner} data-testid="close">
                <AiOutlineClose className="icnnnnn" />
              </IconButton>
            </HeaderContainer>

            <Heading>
              Buy Nxt Watch Premium Plans With <br />
              UPI
              {close.toString()}
            </Heading>
            <Button>GET IT NOW</Button>
          </PremiumSubscriptionConatiner>
        ) : (
          ''
        )}
      </>
    )
  }
}

export default PremiumSubscription
