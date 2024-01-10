import '../styles/links.css'

interface LinkProps {
  text: string
}

function Link({ text }: LinkProps) {
  return (
    <a href="#" className="links-container">
      <div>{text}</div>
      <div>arrow</div>
    </a>
  )
}

export default Link
