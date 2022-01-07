import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import { routes } from "./utils/routeStrings"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
