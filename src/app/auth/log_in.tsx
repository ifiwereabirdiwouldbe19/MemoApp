import {View ,Text,TextInput,TouchableOpacity,StyleSheet,Alert} from 'react-native';

import { Link,router } from 'expo-router';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Button from '../../components/Button';
import { auth } from '../../config'

const handlePress=(email: string,password:string):void =>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        console.log(userCredential.user.uid);
        router.replace('/memo/list');
    })
    .catch((error)=>{
        const { code,message } = error;
        console.log(code,message);
        Alert.alert(message);
    });
}

const Login=():JSX.Element=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    return(
        <View style={styles.contatiner}>
            <View style={styles.inner}>
                 <Text style={styles.title}>Log in</Text>
                 <TextInput 
                 style={styles.input} 
                 value={email}
                 onChangeText={(text)=>setEmail(text)}
                 autoCapitalize='none'
                 keyboardType='email-address'
                 placeholder='Email Address'
                 textContentType='emailAddress'
                 />
                 <TextInput 
                 style={styles.input} 
                 value={password}
                 onChangeText={(text)=>setPassword(text)} 
                autoCapitalize='none'
                secureTextEntry
                placeholder='Password'
                textContentType='password'
                 />
                    <Button label="submit" onPress={()=>{handlePress(email,password)}}/>
                 <View style={styles.footer}>
                    <Text style={styles.footerText}>not registered?</Text>
                    <Link href="/auth/sign_up" asChild replace>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>sign up here!</Text>
                        </TouchableOpacity>
                    </Link>
                    
                 </View>

            </View>
           
        </View>
    )
}
const styles=StyleSheet.create({
    contatiner:{
        flex:1,
        backgroundColor:'#f0f4f8',
    },
        inner:{
        paddingHorizontal:24,
        paddingVertical:27,
    },
    title:{
        fontSize:24,
        lineHeight:32,
        fontWeight:'bold',
        marginBottom:24,
    },
    input:{
        borderWidth:1,
        borderColor:'#dddddd',
        backgroundColor:'#ffffff',
        height:48,
        padding: 8,
        fontSize:16,
        marginBottom:16,
    },

    footer:{
        flexDirection:'row',
    },
    footerText:{
        fontSize:14,
        lineHeight:24,
        marginRight:8,
        color:'#0000000',
    },
    footerLink:{
        fontSize:14,
        lineHeight:24,
        marginRight:8,
        color:'#467fd3',
    },


})

export default Login;