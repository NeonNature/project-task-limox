import { KeyboardArrowRight } from '@mui/icons-material'
import '../styles/utilities.css'

interface ButtonProps {
  text: string
}

function Button({ text }: ButtonProps) {
  return (
    <button className="button-container">
      <div>{text}</div>
      <div>
        <KeyboardArrowRight fontSize="large" />
      </div>
    </button>
  )
}

export default Button
