import ScreenContainer from '../components/ScreenContainer'
import serviceImage from '../assets/image-000.png'
import Button from '../components/Button'

function Screen_RequestService() {
  return (
    <ScreenContainer image={serviceImage} classHelper="screen-main-image">
      <div id="screen-service-content">
        <div>
          We are happy to hear from you. <br />
          Limousine service, airport transfer, <br />
          shuttle service
        </div>
        <div>
          <Button text="Request an exclusive LimoX now" />
        </div>
      </div>
    </ScreenContainer>
  )
}

export default Screen_RequestService
