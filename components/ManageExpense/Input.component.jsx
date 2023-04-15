import { View, Text, TextInput } from "react-native";

const InputField = ({ label, textInputConfig }) => {
    return (  
        <View>
            <Text>{label}</Text>
            <TextInput {...textInputConfig} />
        </View>
    );
}
 
export default InputField;

