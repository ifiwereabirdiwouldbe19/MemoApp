import {View , TextInput,StyleSheet,KeyboardAvoidingView
} from "react-native";

import Circlebutton from "../../components/circleButton";
import Icon from "../../components/icon";
import { container } from "googleapis/build/src/apis/container";
import { router } from "expo-router";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config";

const handlePress=async():void=>{
    addDoc(collection(db,'memos'),{
        bodyText: 'test'
    })
    .then((docRef)=>{
        console.log('Success!!!! Document written with ID: ',docRef.id);
        router.back()
    })
    .catch((error)=>{
        console.log(error);
    });

    // await addDoc(collection(db,'memos'),{
    //     bodyText: 'test2'
    // }).catch((error)=>{
    //     console.log(error);
    // });
    // router.back()
}

const   Create = (): JSX.Element => {
    return(
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.inputContainer}> 
                <TextInput multiline style={styles.input} value=""/>
            </View>
            <Circlebutton onPress={handlePress}>
                <Icon name="check" size={40} color="#ffffff"/>
            </Circlebutton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    inputContainer:{
        paddingVertical:32,
        paddingHorizontal:27,
        flex:1
    },
    input:{
        flex:1,
        textAlignVertical: "top",
        fontSize:16,
        lineHeight:24
    }
})

export default Create;