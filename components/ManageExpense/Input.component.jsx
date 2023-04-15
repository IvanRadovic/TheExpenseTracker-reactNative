import { View, Text, TextInput, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constats/styles"

const InputField = ({ label, textInputConfig }) => {

    let inputStyles = [styles.input];

    /* -- to check if we have multiline input --- */
    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline)
    }

    return (  
        <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>{label}</Text>
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
    }
});

