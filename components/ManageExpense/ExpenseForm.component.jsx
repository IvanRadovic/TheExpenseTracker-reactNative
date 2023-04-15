import { View, StyleSheet, Text} from "react-native";
import InputField from "./Input.component";
import { useState } from "react";

const ExpenseForm = () => {

    const [inputsValue, setInputValues] = useState({
        amount:'',
        date:'',
        description:''
    });

    const inputChangeHandler = (inputIdentifier, enteredValue) => {  
        setInputValues((currVal) => {
            return {
                ...currVal,
                [inputIdentifier]: enteredValue
            }
        });
    }

    return (  
        <View style={styles.formContainer}>
            <Text style={styles.title}>Your expense</Text>
            <View style={styles.inputsRow}>
                <InputField 
                    style={styles.rowInput}
                    label="Amount" 
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputsValue.amount,
                    }}
                />
                <InputField 
                    style={styles.rowInput}
                    label="Date"
                    textInputConfig={{
                        placeholder:'YYYY-MM-DD',
                        maxLength:10,
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputsValue.date,
                    }}
                />
            </View>
            <InputField 
                label="Description" 
                textInputConfig={{
                    multiline:true,
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputsValue.description,
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
    marginBottom: 15,
    marginTop:10
   },
   title:{
    fontSize:24,
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    marginBottom:8
   },
   inputsRow:{
    flexDirection:'row',
    justifyContent:'space-between'
   },
   rowInput:{
    flex:1
   }
});