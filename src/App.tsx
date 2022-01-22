import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import CategoriesContainer from "./components/CategoriesContainer"
import ExpensesContainer from "./components/ExpensesContainer"
import { AuthProvider, useAuth } from "./context/AuthContext"
import Calender from "./pages/Calender"
import HomeWrapper from "./pages/HomeWrapper"
import Login from "./pages/Login"
import { routes } from "./utils/routeStrings"

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.HOME} element={
            <RequireAuth redirectTo={routes.LOGIN} >
              <HomeWrapper>
                <CategoriesContainer />
              </HomeWrapper>
            </RequireAuth>
          } />

          <Route path={routes.EXPENSES()} element={
            <RequireAuth redirectTo={routes.LOGIN} >
              <HomeWrapper>
                <ExpensesContainer />
              </HomeWrapper>
            </RequireAuth>
          } />

          <Route path={routes.CALENDER()} element={
            <RequireAuth redirectTo={routes.LOGIN} >
              <Calender />
            </RequireAuth>
          } />

          <Route path={routes.LOGIN} element={
            <NoAuth redirectTo={routes.HOME} >
              <Login />
            </NoAuth>
          } />
          <Route path="*" element={<Navigate to={routes.LOGIN} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}


interface RouteElementWrapperPropTypes {
  children: JSX.Element
  redirectTo: string
}

function RequireAuth({ children, redirectTo }: RouteElementWrapperPropTypes) {

  const authContext = useAuth()

  return authContext?.currentUser ? children : <Navigate to={redirectTo} />
}

function NoAuth({ children, redirectTo }: RouteElementWrapperPropTypes) {
  const authContext = useAuth()

  return authContext?.currentUser ? <Navigate to={redirectTo} /> : children
}