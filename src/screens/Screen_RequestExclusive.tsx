import ScreenContainer from '../components/ScreenContainer'
import exclusiveImage from '../assets/image-004.png'
import Button from '../components/Button'

function Screen_RequestExclusive() {
  return (
    <ScreenContainer image={exclusiveImage} classHelper="screen-main-image">
      <div id="screen-exclusive-content">
        <div>
          BOOK EXCLUSIVE <br />
          CHAUFFER SERVICES
        </div>
        <div>
          <Button text="Request an exclusive LimoX now" />
        </div>
      </div>
    </ScreenContainer>
  )
}

export default Screen_RequestExclusive
