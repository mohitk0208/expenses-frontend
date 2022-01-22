import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_MONTH_DATA } from "../../utils/apiQueries";
import { sendQuery } from "../../utils/sendQuery";
import CalenderDay from "./CalenderDay";
import { ICalenderData, IExpense, IMonthByMonthNumAndYear } from "../../types/expenseCalender.types"

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// return a list of dates of a month
function getDates(year: number, month: number) {
  const date = new Date(year, month);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dates = [];
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(new Date(year, month, i));
  }
  return dates;
}


function extractInfo(data?: IMonthByMonthNumAndYear): ICalenderData[] {
  if (!data) {
    return [];
  }

  const { budgetPlan, expenses } = data;

  let expensesByDates: { [property: string]: IExpense[] } = {}

  getDates(data.year, data.monthNum).forEach((date, index) => {
    expensesByDates[`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`] = []
  })

  expenses.forEach(expense => {
    const date = new Date(Number(expense.dateSpentOn));
    const key = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

    expensesByDates[key].push(expense);
  })

  let dataByDates: ICalenderData[] = [];

  let lastTillDateBudget = 0
  let lastTotalSpent = 0
  Object.keys(expensesByDates).forEach(key => {

    const [dd, month, year] = key.split("-")
    const date = new Date(Number(year), Number(month), Number(dd));
    const totalBudgetTillDate = lastTillDateBudget + budgetPlan.perDayAmount
    lastTillDateBudget = totalBudgetTillDate;
    const spentToday = expensesByDates[key].reduce((acc, curr) => {

      if (curr.type === "regular") return acc + curr.amount
      else return acc
    }, 0)
    const totalSpent = lastTotalSpent + spentToday
    lastTotalSpent = totalSpent;

    const currentDifference = totalBudgetTillDate - totalSpent;

    const savedToday = budgetPlan.perDayAmount - spentToday;

    let dayStatus: "overspending" | "saved" | "notReached" = "notReached"
    if (date < new Date()) {
      dayStatus = currentDifference > 0 ? "saved" : "overspending";
    }

    dataByDates.push({
      date,
      dayStatus,
      totalSpent,
      totalBudgetTillDate,
      currentDifference,
      savedToday,
      spentToday
    })

  })



  return dataByDates
}

function ExpenseCalender() {

  const [calenderDataList, setCalenderDataList] = useState<ICalenderData[]>([]);
  const [loading, setLoading] = useState(true);

  const { monthNum, year } = useParams()

  useEffect(() => {
    async function fetchData(year: number, monthNum: number) {
      console.log("function called")
      try {
        setLoading(true);
        const data = await sendQuery(GET_MONTH_DATA(year, monthNum));

        if (data) {
          console.log(data);

          setCalenderDataList(extractInfo(data?.monthByMonthNumAndYear as IMonthByMonthNumAndYear));

        }
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false)
      }
    }

    console.log(monthNum, year)

    if ((typeof monthNum !== undefined && monthNum !== null) && Number(year)) {
      fetchData(Number(year), Number(monthNum));
    }

  }, [monthNum, year]);

  return (
    <div>
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          calenderDataList ? (
            <div className="grid grid-cols-7 gap-0.5 grid-rows-7 mx-auto w-11/12 h-[80vh]" >

              {/* The starting row that shows the days in the week */}
              {Array(7).fill(0).map((_, i) => {
                return (
                  <div className="w-full h-full flex items-center justify-center bg-gray-400" key={i} >
                    <p>
                      {weekDays[i]}
                    </p>
                  </div>
                )
              })}

              {/* first row filler if the date doesn't start from the beginning  */}
              {
                Array((new Date(Number(year), Number(monthNum), 1).getDay()))
                  .fill(0)
                  .map((_, index) => {
                    return <div>.</div>
                  })
              }

              {/* Actual calender data*/}
              {
                calenderDataList.map((data, index) => {
                  return (
                    // <div>
                    <CalenderDay key={index} data={data} />
                  )
                }
                )
              }


              {/* last row filler */}

              {
                Array(42 - (calenderDataList.length + (new Date(Number(year), Number(monthNum), 1).getDay())))
                  .fill(0)
                  .map((_, index) => {
                    return <div>.</div>
                  })
              }

            </div>
          ) : (
            <div>No data</div>
          )
        )
      }
    </div>
  )
}


export default ExpenseCalender;