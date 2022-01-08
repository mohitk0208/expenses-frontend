import { MouseEventHandler } from "react"

interface FABProps {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  className?: string,
  children: React.ReactNode | string
}

const FAB: React.FC<FABProps> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={`fixed text-center rounded-full bg-green-300 w-16 h-16 text-4xl font-bold bottom-12 right-12 hover:bg-green-400 hover:text-white transition-colors duration-200 ease-in-out shadow-lg ${className ? className : ""} `} type="button" >
      {children}
    </button>
  )
}

export default FAB