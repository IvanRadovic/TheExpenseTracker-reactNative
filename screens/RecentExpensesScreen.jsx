import { useContext, useEffect, useState } from "react";

/* --- Compoentns ---- */
import ExpensesOutput from "../components/Expenses/ExpensesOutput.component";
import LoadingOverlay from "../components/UI/LoadingOverlay.component";
/* --- Context --- */
import { ExpensesContext } from "../store/expenses-context";

import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";


function RecentExpensesScreen() {

  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses);
    }

    getExpenses();
  }, []);

  if(isFetching) {
    return <LoadingOverlay />
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}
 
export default RecentExpensesScreen;