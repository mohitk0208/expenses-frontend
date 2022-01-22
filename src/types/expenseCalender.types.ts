export interface ICalenderData {
  date: Date;
  dayStatus: "overspending" | "saved" | "notReached";
  totalSpent: number;
  totalBudgetTillDate: number;
  currentDifference: number;
  savedToday: number;
  spentToday: number;
}

export interface IExpense {
  id: string,
  amount: number,
  spentFor: string,
  dateSpentOn: string,
  type: "forMonth" | "regular",
  categoryId: string
}

export interface IMonthByMonthNumAndYear {
  id: string,
  monthNum: number,
  year: number,
  budgetPlan: {
    id: string,
    perDayAmount: number,
    perMonthAmount: number
  },
  expenses: [IExpense]
}