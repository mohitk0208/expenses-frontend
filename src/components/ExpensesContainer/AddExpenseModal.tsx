import { useState } from "react";
import { useParams } from "react-router-dom";
import { ADD_EXPENSE } from "../../utils/apiQueries";
import { sendQuery } from "../../utils/sendQuery";
import Modal from "../utilComponents/Modal";

interface AddExpenseModalProps {
  show: boolean;
  onClose: (() => void | null);
}

function AddExpenseModal({ show, onClose }: AddExpenseModalProps) {

  const [amount, setAmount] = useState<Number>(0)
  const [dateSpentOn, setDateSpentOn] = useState<Date>(new Date())
  const [spentFor, setSpentFor] = useState<string>("")
  const [type, setType] = useState<"forMonth" | "regular">("regular")
  const [loading, setLoading] = useState<boolean>(false)

  const { categoryId } = useParams()

  const submitHandler = async () => {
    try {
      setLoading(true)
      const data = await sendQuery(ADD_EXPENSE(amount, dateSpentOn, spentFor, type, categoryId!))

      if(data) {
        console.log(data)
        // set the expenses data
        onClose()
      }

    }
    catch (err) {
      console.log(err)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      show={show}
      headline="Add Expense"
      onCancel={onClose}
      onSubmit={submitHandler}
      className=""
      btn="Add"
      cancelBtn="Cancel"
    >

      <label className="flex flex-col gap-1 my-1">
        <span>Amount</span>
        <input
          type="number"
          className="w-full py-1 px-2 border-2 rounded-md focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-1 focus:outline-none"
          value={String(amount)}
          onChange={(e) => setAmount(Number(e.target.value))}
          required />
      </label>

      <label className="flex flex-col gap-1 my-1">
        <span>Date Spent On</span>
        <input
          type="date"
          className="w-full py-1 px-2 border-2 rounded-md focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-1 focus:outline-none"
          value={String(dateSpentOn)}
          onChange={(e) => setDateSpentOn(new Date(e.target.value))}
          required />
      </label>

      <label className="flex flex-col gap-1 my-1">
        <span>Spent For</span>
        <input
          type="text"
          className="w-full py-1 px-2 border-2 rounded-md focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-1 focus:outline-none"
          value={spentFor}
          onChange={(e) => setSpentFor(e.target.value)}
          required />

      </label>

      <label className="flex flex-col gap-1 my-1">
        <span>Type</span>
        <select
          className="w-full py-1 px-2 border-2 rounded-md focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-1 focus:outline-none"
          value={type}
          onChange={(e) => setType(e.target.value as "forMonth" | "regular")}
          required>
          <option value="regular">Regular</option>
          <option value="forMonth">For Month</option>
        </select>
      </label>



    </Modal>
  )

}

export default AddExpenseModal;