import { useLayoutEffect } from "react";
import { View, Text } from "react-native"

const ManageExpenseScreen = ({ route, navigation }) => {

    /* -- Checking for expenseId (if its undefined - adding ELSE updating) -- */
    const editedExpenseId = route.params?.expenseId;
    const isEditing =  !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    return (  
        <View>
            <Text>Ovo je Manage Expense Screen</Text>
        </View>
    );
}
 
export default ManageExpenseScreen;
