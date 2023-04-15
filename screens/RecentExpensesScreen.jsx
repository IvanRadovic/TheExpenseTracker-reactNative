import { useContext } from "react";

/* --- Compoentns ---- */
import ExpensesOutput from "../components/Expenses/ExpensesOutput.component";
/* --- Context --- */
import { ExpensesContext } from "../store/expenses-context";

import { getDateMinusDays } from "../utils/date";


const RecentExpensesScreen = () => {
    const expensesCtx = useContext(ExpensesContext);

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7daysAgo = getDateMinusDays(today, 7);

        return (expense.date >= date7daysAgo) && (expense.date <= today);
    });

    return (
        <ExpensesOutput 
            expenses={recentExpenses} 
            expensesPeriod='Last 7 days' 
            fallBackText="No expenses register for last 7 days!" 
        />
    );
}
 
export default RecentExpensesScreen;