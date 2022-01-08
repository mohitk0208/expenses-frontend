import { I_GET_EXPENSES } from "../../types/apiQueriesResponse.types"

interface ExpenseProps {
  expense: I_GET_EXPENSES
}

const Expense: React.FC<ExpenseProps> = ({ expense }) => {

  return (
    <div className="flex border rounded-md py-1 px-3 my-1 shadow-md " >
      <div className="flex-1" >
        <p className="text-xs font-bold text-gray-600/80" >{expense.date}</p>
        <p className="text-sm sm:text-base" >
          {expense.spentOn}
        </p>
      </div>
      <div className="w-20 font-bold flex items-center sm:text-xl " >
        &#8377; {`${expense.amount}`}
      </div>
    </div>
  )
}

export default Expense