import { useContext } from "react";

/* --- Components ---  */
import ExpensesOutput from "../components/Expenses/ExpensesOutput.component";

/* ---  Context --- */
import { ExpensesContext } from "../store/expenses-context";

const AllExpensesScreen = () => {
    const expensesCtx = useContext(ExpensesContext)
    return (
        <ExpensesOutput 
            expenses={expensesCtx.expenses} 
            expensesPeriod="Total"
            fallBackText="No register expenses found!"
        />
    )
}
 
export default AllExpensesScreen;
