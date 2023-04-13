import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native"
import IconButton from "../components/UI/IconButton.component";
import { GlobalStyles } from "../constats/styles";
import CustomButton from "../components/UI/CustomButtons.component";

const ManageExpenseScreen = ({ route, navigation }) => {

    /* -- Checking for expenseId (if its undefined - adding ELSE updating) -- */
    const editedExpenseId = route.params?.expenseId;
    const isEditing =  !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    const deleteExpenseHandler = () => {
      
    };

    const cancelHandler = () => {
      
    }

    const confirmHandler = () => {
      
    }

    return (  
        <View style={styles.container}>
            <View style={styles.buttons}>
                <CustomButton mode='flat' onPress={cancelHandler} style={styles.button} >Cancel</CustomButton>
                <CustomButton onPress={confirmHandler} style={styles.button}>{isEditing ? 'Update' : 'Add'}</CustomButton>
            </View>    
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton 
                        icon="trash" 
                        color={GlobalStyles.colors.error500} 
                        size={30} 
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
}
 
export default ManageExpenseScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary800
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        minWidth:120,
        marginHorizontal:10
    },
    deleteContainer:{
        marginTop:16,
        paddingTop:10,
        borderTopWidth:2,
        borderTopColor:GlobalStyles.colors.primary200,
        alignItems:'center'
    }
});
