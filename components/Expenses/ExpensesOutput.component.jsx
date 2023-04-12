import { View, StyleSheet } from "react-native";

/* --- COMPONENTS --- */
import ExpensesSummary from "./ExpensesSummary.component";
import ExpensesList from "./ExpensesList.component";

/* -- css colors -- */
import { GlobalStyles } from "../../constats/styles";

const DUMMY_EXPNESES = [
    {
        id: 'e1',
        description:'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e2',
        description:'A pair of trousers',
        amount: 89.99,
        date: new Date('2021-01-05'),
    },
    {
        id: 'e3',
        description:'A some dummy movie',
        amount: 5.99,
        date: new Date('2021-12-01'),
    },
    {
        id: 'e4',
        description:'Some book',
        amount: 9.99,
        date: new Date('2021-02-01'),
    },
    {
        id: 'e5',
        description:'Another letter',
        amount: 19.99,
        date: new Date('2021-08-10'),
    },  {
        id: 'e6',
        description:'A pair of trousers',
        amount: 89.99,
        date: new Date('2021-01-05'),
    },
    {
        id: 'e7',
        description:'A some dummy movie',
        amount: 5.99,
        date: new Date('2021-12-01'),
    },
    {
        id: 'e8',
        description:'Some book',
        amount: 9.99,
        date: new Date('2021-02-01'),
    },
    {
        id: 'e9',
        description:'Another letter',
        amount: 19.99,
        date: new Date('2021-08-10'),
    },
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
    return ( 
        <View style={styles.container}>
            {/* --Summary -- */}
            <ExpensesSummary expenses={DUMMY_EXPNESES} periodName={expensesPeriod} />
            {/* -- List -- */}
            <ExpensesList expenses={DUMMY_EXPNESES} />
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