export const GET_CATEGORIES = `
{
  categories {
    id,
    name,
    backgroundUrl
  }
}
`

export const GET_EXPENSES_BY_CATEGORY = (categoryId: string) => `
{
  category(id: ${categoryId}) {
    expenses {
      id,
      date,
      amount,
      spentOn
    }
  }
}
`