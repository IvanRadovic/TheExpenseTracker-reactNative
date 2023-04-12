import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constats/styles";

const ExpensesSummary = ({ expenses, periodName}) => {

    /* ----- Sum of exepenses ----- */
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount  
    }, 0);

    return ( 
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>$ {expensesSum.toFixed(2)}</Text>
        </View>
     );
}
 
export default ExpensesSummary;

export const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:GlobalStyles.colors.primary50,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    period:{
        fontSize:12,
        color:GlobalStyles.colors.primary400,
    },
    sum:{
        fontSize:16,
        fontWeight:'bold',
        color:GlobalStyles.colors.primary500
    }
})