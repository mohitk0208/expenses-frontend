import { ICalenderData } from "../../types/expenseCalender.types";


interface CalenderDayProps {
  data: ICalenderData
}

function CalenderDay({ data }: CalenderDayProps) {

  function backgroundColor(status: string) {
    switch (status) {
      case "saved":
        return "bg-green-200";
      case "overspending":
        return "bg-red-200";
      default:
        return "bg-white";
    }
  }

  return (
    <div className={`${backgroundColor(data.dayStatus)} w-full h-full  `} >
      {data.date.getDate()}
    </div>
  )

}

export default CalenderDay;