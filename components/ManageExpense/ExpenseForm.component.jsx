import { View, StyleSheet } from "react-native";
import InputField from "./Input.component";

const ExpenseForm = () => {

    const amountChangeHandler = () => {  
    }

    return (  
        <View style={styles.formContainer}>
            <InputField 
                label="Amount" 
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: amountChangeHandler
                }}
             />
            <InputField 
                label="Date" 
                textInputConfig={{
                    placeholder:'YYYY-MM-DD',
                    maxLength:10,
                    onChangeText:() => {}
                }}
            />
            <InputField 
                label="Description" 
                textInputConfig={{
                    multiline:true,
                    // autoCapitalize:'words', 'sentences'..
                    // autocorrect:false, // default is true

                }}
            />
        </View>
    );
}
 
export default ExpenseForm;

const styles = StyleSheet.create({
   formContainer:{
    marginBottom: 15
   } 
});