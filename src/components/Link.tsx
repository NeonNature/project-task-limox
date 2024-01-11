import { East } from '@mui/icons-material'
import '../styles/links.css'

interface LinkProps {
  text: string
}

function Link({ text }: LinkProps) {
  return (
    <a href="#" className="links-container">
      <div>{text}</div>
      <div>
        <East fontSize={'inherit'} />
      </div>
    </a>
  )
}

export default Link
