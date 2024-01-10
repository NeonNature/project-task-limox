import ScreenContainer from '../components/ScreenContainer'
import mainImage from '../assets/image-002.png'

function Screen_Main() {
  return (
    <ScreenContainer image={mainImage} classHelper="screen-main-image">
      <div id="screen-main-content">
        <div>
          WE MOVE <br />
          PROFESSIONALLY
        </div>
        <div>
          <div>Destination</div>
          <div>Date Picker</div>
          <div>Dropdown</div>
          <div>Button with Car</div>
        </div>
      </div>
    </ScreenContainer>
  )
}

export default Screen_Main
