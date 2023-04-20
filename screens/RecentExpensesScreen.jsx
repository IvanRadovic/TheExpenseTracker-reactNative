import { useContext, useEffect, useState } from "react";

/* --- Compoentns ---- */
import ExpensesOutput from "../components/Expenses/ExpensesOutput.component";
import LoadingOverlay from "../components/UI/LoadingOverlay.component";
/* --- Context --- */
import { ExpensesContext } from "../store/expenses-context";

import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import ErrorOverlay from "../components/UI/ErrorOverlay.component";


function RecentExpensesScreen() {

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  /* --- UseFetch for date --- */
  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses');
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);



  /* ---- Error handler --- */
  if(error && !isFetching){
    return <ErrorOverlay message={error} />
  }

  if(isFetching) {
    return <LoadingOverlay />
  }
  /* ----- END of error hanlder ---- */



  /* ---- Filter expenses by date - last 7 days from today --- */
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