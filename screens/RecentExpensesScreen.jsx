import { View, Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput.component";

const RecentExpensesScreen = () => {
    return <ExpensesOutput expensesPeriod='Last 7 days' />
}
 
export default RecentExpensesScreen;