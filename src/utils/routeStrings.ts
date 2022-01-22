export const routes = {
  LOGIN: "/login",
  HOME: "/",
  EXPENSES: (categoryId?: string | number) => `/expenses/${categoryId ? categoryId : ":categoryId"}`,
  CALENDER: (monthNum?: number, year?: number) => `/calender/${year ? year : ":year"}/${monthNum ? monthNum : ":monthNum"}`,
}