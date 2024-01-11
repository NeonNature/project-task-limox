import '../styles/utilities.css'
import carImage from '../assets/card-car.png'
import Button from './Button'

function Card() {
  return (
    <div className="card-container">
      <div>LimoX Luxury Van</div>
      <div>
        <div>
          up to 5 guests. <br />
          Conference seating <br />
          available upon request
        </div>
      </div>
      <img src={carImage} alt="Image of a car" />
      <Button text="Request an exclusive LimoX now" />
    </div>
  )
}

export default Card
