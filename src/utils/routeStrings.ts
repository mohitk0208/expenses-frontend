export const routes = {
  LOGIN: "/login",
  HOME: "/",
  EXPENSES: (categoryId?: string | number) => `/expenses/${categoryId ? categoryId : ":categoryId"}`
}