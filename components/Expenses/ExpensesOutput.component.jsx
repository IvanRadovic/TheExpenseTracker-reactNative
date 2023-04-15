import { View, StyleSheet, Text } from "react-native";

/* --- COMPONENTS --- */
import ExpensesSummary from "./ExpensesSummary.component";
import ExpensesList from "./ExpensesList.component";

/* -- css colors -- */
import { GlobalStyles } from "../../constats/styles";


const ExpensesOutput = ({ expenses, expensesPeriod, fallBackText }) => {
    let content = <Text style={styles.infoText}>{fallBackText}</Text>

    if(expenses.length > 0){
        content = <ExpensesList expenses={expenses} />
    }

    return ( 
        <View style={styles.container}>
            {/* --Summary -- */}
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {/* -- List -- */}
            {content}
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
    },
    infoText:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        marginTop:32
    }
})