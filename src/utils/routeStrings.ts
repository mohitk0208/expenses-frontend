export const routes = {
  LOGIN: "/login",
  HOME: "/",
  EXPENSES: (categoryId?: string | number) => `/expenses/${categoryId ? categoryId : ":categoryId"}`,
  CALENDER: (year?: number, monthNum?: number) => `/calender/${year ? year : ':year'}/${typeof(monthNum) !== "undefined" && monthNum !== null ? monthNum : ':monthNum'}`
}