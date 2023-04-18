import { useContext, useEffect, useState } from "react";

/* --- Compoentns ---- */
import ExpensesOutput from "../components/Expenses/ExpensesOutput.component";
/* --- Context --- */
import { ExpensesContext } from "../store/expenses-context";

import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";


const RecentExpensesScreen = () => {
    const expensesCtx = useContext(ExpensesContext);

    // useEffect(() => {
    //     async function getExpenses() {
    //         const expenses = await fetchExpenses();
    //     }
    //     getExpenses();
    // },[]);

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