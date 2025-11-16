import { View,Text,StyleSheet } from "react-native";

interface Props{
    label: string
}   

const Button = (props: Props):JSX.Element=>{
    const {label}=props;
    return(
            <View style={styles.button}>
                <Text style={styles.buttonlabel}>{label}</Text>        
            </View>
    )
}
const styles=StyleSheet.create({
        button:{
        backgroundColor:'#467fd3',
        height:48,
        borderRadius:4,
        alignSelf:'flex-start',
        marginBottom:24,
    },
    buttonlabel:{
        color:'#ffffff',
        fontSize:16,
        lineHeight:32,
        paddingVertical:8,
        paddingHorizontal:24,
        fontWeight:'bold',
    },

})
export default Button;