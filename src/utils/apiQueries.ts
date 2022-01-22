export const GET_CATEGORIES = () => {
  return {
    query: `
    {
      categories {
        id,
        name,
        backgroundUrl
      }
    }
    `,
    variables: {}
  }
}



export const GET_EXPENSES_BY_CATEGORY = (categoryId: string) => ({
  query: `
  query getExpensesByCategory($categoryId: String!) {
    category(id: $categoryId) {
      expenses {
        id,
        amount,
        dateSpentOn,
        spentFor
      }
    }
  }
  `,
  variables: {
    categoryId
  }
})



export const ADD_CATEGORY = (
  categoryName: string,
  backgroundUrl?: string,
  description: string = ""
) =>  ({
  query:`
  mutation addNewCategory($name: String!, $backgroundUrl: String, $description: String) {
    addCategory(name: $name, backgroundUrl: $backgroundUrl, description: $description) {
      id
      name
      backgroundUrl
      description
    }
  }
  `,
  variables: {
    name: categoryName,
    backgroundUrl: backgroundUrl,
    description: description
  }
})



export const ADD_EXPENSE = (
  amount: Number,
  dateSpentOn: Date,
  spentFor: string,
  type: "forMonth" | "regular",
  categoryId: string
) => ({
  query: `
  mutation addNewExpense($amount: Float!, $dateSpentOn: String!, $spentFor: String!, $type: String!, $categoryId: String!) {
    addExpense(amount: $amount, dateSpentOn: $dateSpentOn, spentFor: $spentFor, type: $type, categoryId: $categoryId) {
      id
      amount
      dateSpentOn
      spentFor
      type
      categoryId
    }
  }
  `,
  variables: {
    amount,
    dateSpentOn: dateSpentOn.toISOString(),
    spentFor,
    type,
    categoryId
  }
})


export const GET_MONTH_DATA = (
  year: number,
  monthNum: number,
) => ({
  query: `
  query getMonthData($year: Int!, $monthNum: Int!) {
    monthByMonthNumAndYear(year: $year, monthNum: $monthNum) {
      id
      year
      monthNum
      budgetPlan {
        id
        perDayAmount
        perMonthAmount

      }
      expenses {
        id
        amount
        dateSpentOn
        spentFor
        type
        categoryId
      }
    }
  }
  `,
  variables: {
    year,
    monthNum
  }
})