import ScreenContainer from '../components/ScreenContainer'
import logoVW from '../assets/logo-vw.png'
import logoBMW from '../assets/logo-bmw.png'
import logoAudi from '../assets/logo-audi.gif'
import logoMercedes from '../assets/logo-mercedes.png'

function Screen_Main() {
  return (
    <ScreenContainer classHelper="screen-options-container">
      <div>
        <div>
          AT LimoX WE HAVE <br />
          THE BEST FLEET OPTIONS
        </div>
        <div>
          Not only customers from Europe but from <br />
          all over the world trust LimoX service
        </div>
        <div className="screen-options-logo">
          <div>
            <img src={logoVW} alt="Volkswagen Logo" id="logo-vw" />
          </div>
          <div>
            <img src={logoBMW} alt="BMW Logo" id="logo-bmw" />
          </div>
          <div>
            <img src={logoAudi} alt="Audi Logo" id="logo-audi" />
          </div>
          <div>
            <img src={logoMercedes} alt="Mercedes Logo" id="logo-mercedes" />
          </div>
        </div>
      </div>
    </ScreenContainer>
  )
}

export default Screen_Main
