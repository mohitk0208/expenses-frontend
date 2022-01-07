import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { routes } from "../../utils/routeStrings"

const Navbar = () => {

  const { currentUser, logout } = useAuth()

  return (
    <nav className="flex items-center justify-between bg-gray-200 py-1 px-5 shadow-sm">
      <div>
        <Link to={routes.HOME} >
          <h1 className="font-bold" >
            Expense Tracker
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-3" >
        <p>{currentUser?.firstName} {currentUser?.lastName}</p>
        <button
          className="text-red-500 border border-red-500 px-2 py-1 m-1 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200 ease-in-out"
          type="button"
          onClick={async () => await logout()}
        >
          logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar