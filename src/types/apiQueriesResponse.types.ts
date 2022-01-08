export interface I_GET_CATEGORIES {
  id: string,
  name: string,
  backgroundUrl: string
}

export interface I_GET_EXPENSES {
  id: string,
  amount: Number,
  spentOn: string,
  date: string,
  // category: string,
  // month: string,
  // user: string
}