import ScreenContainer from '../components/ScreenContainer'
import requestBookingImage from '../assets/image-007.png'
import Button from '../components/Button'

function Screen_RequestBooking() {
  return (
    <ScreenContainer
      image={requestBookingImage}
      classHelper="screen-booking-image"
    >
      <div id="screen-booking-content">
        <div id="screen-booking-title">
          BOOK YOUR <br />
          PROFESSIONAL RIDE
        </div>
        <Button text="Request an exclusive transport service now" />
      </div>
    </ScreenContainer>
  )
}

export default Screen_RequestBooking
