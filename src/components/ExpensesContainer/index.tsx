import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { I_GET_EXPENSES } from "../../types/apiQueriesResponse.types"
import { GET_EXPENSES_BY_CATEGORY } from "../../utils/apiQueries"
import { endpoints } from "../../utils/endpoints"
import Expense from "./Expense"

const ExpensesContainer = () => {
  const [expenses, setExpenses] = useState<I_GET_EXPENSES[]>([])
  const [loading, setLoading] = useState(false)

  const { currentUser } = useAuth()
  const { categoryId } = useParams()

  useEffect(() => {
    async function fetchExpenses() {

      try {
        setLoading(true)
        const res = await fetch(endpoints.GRAPHQL, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            query: GET_EXPENSES_BY_CATEGORY(categoryId || "")
          })
        })
        const resData = await res.json()

        if(resData.data) {
          console.log(resData)
          setExpenses(resData?.data?.category?.expenses)
        }

      }
      catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false)
      }

    }

    fetchExpenses()

  }, [currentUser, categoryId])

  return (
    <div className="px-[5%] divide-y" >
      <div className="pb-2">
        <h1 className="font-bold text-xl text-center" >
          Expenses
        </h1>
      </div>
      <div className=" max-w-xl min-w-[250px] w-5/6 mx-auto pb-8" >
        {loading ? (
          <p>
            loading ...
          </p>
        ) : (
          expenses.map(expense => {
            return <Expense key={expense.id} expense={expense} />
          })
        )}

      </div>
    </div>
  )

}

export default ExpensesContainer