import { Pressable, View, Text, StyleSheet } from "react-native";

/* -- Global styles -- */
import { GlobalStyles } from "../../constats/styles";

/* -- FORMATTING DATE --- */
import { getFormattedDate } from "../../utils/date";


const ExpenseItem = ({ description, amount, date }) => {

    const expensePressHandler = () => {
      
    }

    return ( 
        <Pressable onPress={expensePressHandler} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
     );
}
 
export default ExpenseItem;

const styles = StyleSheet.create({
    pressed:{
        opacity:0.75
    },
    expenseItem:{
        padding:15,
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:8,
        shadowColor:GlobalStyles.colors.gray500,
        shadowRadius:5,
        shadowOffset:{width:1, height:1},
        shadowOpacity:0.4
    },
    textBase:{
        color:GlobalStyles.colors.primary50
    },
    description:{
        fontSize:16,
        marginBottom:5,
        fontWeight:'bold',
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:5,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        minWidth:70
    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold',
    }
})