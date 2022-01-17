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



export const GET_EXPENSES_BY_CATEGORY = (categoryId: string) => `
{
  category(id: "${categoryId}") {
    expenses {
      id,
      date,
      amount,
      spentOn
    }
  }
}
`

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