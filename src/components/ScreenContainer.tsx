import { ReactNode } from 'react'
import '../styles/utilities.css'

interface ScreenContainerProps {
  children: ReactNode
  image?: string
  classHelper?: string
}

function ScreenContainer({
  children,
  classHelper = '',
  image,
}: ScreenContainerProps) {
  return (
    <div
      className={`screen-container ${classHelper}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  )
}

export default ScreenContainer
