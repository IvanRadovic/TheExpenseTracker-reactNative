import { useState } from "react";
import { View, StyleSheet, Text} from "react-native";

/* -- Components -- */
import InputField from "./Input.component";
import CustomButtons from "../UI/CustomButtons.component";
import { getFormattedDate } from "../../utils/date";

const ExpenseForm = ({onCancel, onSubmit, submitButtonLabel, defaultValues}) => {

    const [inputsValue, setInputValues] = useState({
        /* ''' Checking of defaultValues if they existring --- */
        amount:defaultValues ? defaultValues.amount.toString() : '',
        date:defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ?  defaultValues.description.toString() : ''
    });

    const inputChangeHandler = (inputIdentifier, enteredValue) => {  
        setInputValues((currVal) => {
            return {
                ...currVal,
                [inputIdentifier]: enteredValue
            }
        });
    }

    const submitHanlder = () => {
        const expenseData = {
            amount: +inputsValue.amount,
            date: new Date(inputsValue.date),
            description: inputsValue.description
        }

        onSubmit(expenseData);
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
            <View style={styles.buttons}>
                <CustomButtons style={styles.button} mode="flat" onPress={onCancel}>
                Cancel
                </CustomButtons>
                <CustomButtons style={styles.button} onPress={submitHanlder}>
                {submitButtonLabel}
                </CustomButtons>
            </View>
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
   },
   buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});