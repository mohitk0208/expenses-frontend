import { host } from "./constants"

export const endpoints = {
  GET_USER: `${host}/getuser`,
  GRAPHQL: `${host}/graphql`,
  GOOGLE_AUTH: `${host}/auth/google`,
  LOGOUT: `${host}/logout`
}