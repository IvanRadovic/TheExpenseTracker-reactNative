import { View, Text, FlatList ,StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem.component";

/* --- Showing expense Items --- */
const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />
}

const ExpensesList = ({ expenses }) => {
    return ( 
        <FlatList 
            data={expenses} 
            renderItem={renderExpenseItem} 
            keyExtractor = {(item) => item.id }
        />
     );
}
 
export default ExpensesList;