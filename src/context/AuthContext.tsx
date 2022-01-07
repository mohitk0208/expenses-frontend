import React, { createContext, useContext, useEffect, useState } from "react"
import { TUser } from "../types/user.types";
import { endpoints } from "../utils/endpoints";


export interface AuthContextType {
  currentUser: TUser | null,
  login: Function,
  logout: Function
}


interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: () => null,
  logout: () => null
});

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: AuthProviderProps) {

  const [currentUser, setCurrentUser] = useState<TUser | null>(null)
  const [loading, setLoading] = useState(true)

  function login() {
    window.open(endpoints.GOOGLE_AUTH, "_self")
    return
  }

  async function logout() {

    try {
      const res = await fetch(endpoints.LOGOUT, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (res.ok) {
        const resData = await res.json()

        setCurrentUser(null)

        console.log(resData)
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {

    async function fetchUser() {
      setLoading(true)
      try {

        const res = await fetch(endpoints.GET_USER, {
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        })

        if (res.ok) {
          const resData = await res.json()

          setCurrentUser(resData)
        }
      } catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false)
      }
    }

    fetchUser()

  }, [])


  const value: AuthContextType = {
    currentUser: currentUser,
    login,
    logout
  }

  return <AuthContext.Provider value={value}>
    {!loading && children}
  </AuthContext.Provider>

}