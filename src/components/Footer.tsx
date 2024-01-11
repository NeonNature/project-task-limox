import '../styles/footer.css'
import logo from '../assets/logo-footer.png'
import { FacebookOutlined } from '@mui/icons-material'

function Footer() {
  return (
    <footer>
      <div className="footer-flex-section">
        <div>
          <img src={logo} alt="LimoX logo" />
        </div>
        <div>
          P.O. Box 4621 Arlington, <br />
          VA 2220
        </div>
        <div>
          D.C. (202) 232-4440 <br />
          Dispatch: (202) 779-6054 <br />
          Virginia: (703) 979-6664
        </div>
        <div>
          Join our list to receive free offerings, <br />
          discounts, coupons & our useful newsletter.
        </div>
        <div>
          <FacebookOutlined fontSize="large" />
          <FacebookOutlined fontSize="large" />
          <FacebookOutlined fontSize="large" />
          <FacebookOutlined fontSize="large" />
          <FacebookOutlined fontSize="large" />
        </div>
      </div>
      <hr />
      <div className="footer-note">
        We would be happy to send you a detailed offer for our extensive driving
        service immediately. Let yourself be inspired - <br />
        whether by the airport transfer, shuttle service, valet parking or our
        LimoX service. We look forward to your call.
      </div>
      <div className="footer-imprint">Imprint Data protection declaration</div>
      <div className="footer-copyright">
        Copyright © 2023 LimoX. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
