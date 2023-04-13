import { View, StyleSheet } from "react-native";

/* --- COMPONENTS --- */
import ExpensesSummary from "./ExpensesSummary.component";
import ExpensesList from "./ExpensesList.component";

/* -- css colors -- */
import { GlobalStyles } from "../../constats/styles";


const ExpensesOutput = ({ expenses, expensesPeriod }) => {
    return ( 
        <View style={styles.container}>
            {/* --Summary -- */}
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {/* -- List -- */}
            <ExpensesList expenses={expenses} />
        </View>
     );
}
 
export default ExpensesOutput;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:25,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700
    }
})