import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Login from "./pages/Login"
import { routes } from "./utils/routeStrings"

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
