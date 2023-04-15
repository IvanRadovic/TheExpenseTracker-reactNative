import { View } from "react-native";
import InputField from "./Input.component";

const ExpenseForm = () => {

    const amountChangeHandler = () => {  
    }

    const dateCangeHandler = () => {
      
    }

    return (  
        <View>
            <InputField 
                label="Amount" 
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: {amountChangeHandler},
                }}
             />
            <InputField 
                label="Date" 
                textInputConfig={{
                    placeholder:'YYYY-MM-DD',
                    maxLength:10,
                    onChangeText:{dateCangeHandler},
                }}
            />
            <InputField label="Description" />
        </View>
    );
}
 
export default ExpenseForm;