import Dashboard from "../components/Dashboard"
import { useAuth } from "../context/AuthContext"

interface HomeWrapperProps {
  children: React.ReactNode
}

function HomeWrapper({ children }: HomeWrapperProps) {
  const { currentUser } = useAuth()

  console.log(currentUser)

  return (
    <div className="flex flex-col min-h-screen">
      <Dashboard />
      {children}
    </div>
  )
}

export default HomeWrapper