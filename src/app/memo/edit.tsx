import {View , TextInput,StyleSheet,Alert
} from "react-native";
import { router,useLocalSearchParams } from "expo-router";
import { useState,useEffect } from "react";
import { doc,getDoc,setDoc,Timestamp } from "firebase/firestore";

import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'
import Circlebutton from "../../components/circleButton";
import Icon from "../../components/icon";

import { auth,db } from "../../config";


const handlePress=(id: string,bodyText:string):void=>{
    if(auth.currentUser === null){return}
    const ref = doc(db,`users/${auth.currentUser.uid}/memos`,id);
    setDoc(ref,{
        bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
    .then(()=>{
        router.back()
    })
    .catch((error)=>{
        console.log(error)
        Alert.alert('更新しました')
    })
}

const   Edit = (): JSX.Element => {
    const id = String(useLocalSearchParams().id)
    const [bodyText,setBodyText]=useState('');
    useEffect(()=>{
        if(auth.currentUser === null){return;}
        const ref = doc(db,`users/${auth.currentUser.uid}/memos`,id);
        getDoc(ref)
        .then((docRef)=>{
            const RemoteBodyText = docRef?.data()?.bodyText;
            setBodyText(RemoteBodyText);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
    return(
        <KeyboardAvoidingView  style={styles.container}>
            <View style={styles.inputContainer}> 
                <TextInput 
                multiline 
                style={styles.input} 
                value={bodyText}
                onChangeText={(text)=>{setBodyText(text)}}
                autoFocus
                />
            </View>
            <Circlebutton onPress={()=>{handlePress(id,bodyText)}}>
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

        flex:1
    },
    input:{
        flex:1,
        textAlignVertical: "top",
        fontSize:16,
        lineHeight:24,
                paddingVertical:32,
        paddingHorizontal:27,
    }
})

export default Edit;