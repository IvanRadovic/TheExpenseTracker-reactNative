import { View, Text, TextInput, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constats/styles"

const InputField = ({ label, style, invalid,  textInputConfig }) => {

    let inputStyles = [styles.input];

    /* -- to check if we have multiline input --- */
    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline)
    }
    /* -- Styling for error labels --- */
    if(invalid) {
        inputStyles.push(styles.invalidInput);
    }

    return (  
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.labelStyle, invalid && styles.invalidLable]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
}
 
export default InputField;

const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal:5,
        marginVertical:10
    },
    labelStyle:{
        fontSize:12,
        color:GlobalStyles.colors.primary100,
        marginBottom:6,
    },
    input:{
        backgroundColor:GlobalStyles.colors.primary100,
        color:GlobalStyles.colors.primary700,
        padding: 8,
        borderRadius:6,
        fontSize:18,
    },
    inputMultiline:{
        minHeight:100,
        textAlignVertical:'top'
    },
    invalidLable: {
        color:GlobalStyles.colors.error500,
    },
    invalidInput:{
        backgroundColor:GlobalStyles.colors.error50
    }
});

