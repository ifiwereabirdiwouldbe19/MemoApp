import {View ,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

import { Link,router } from 'expo-router';
import Button from '../../components/Button';

const handlePress=():void =>{
    return router.push('/memo/list');
}

const Login=():JSX.Element=>{
    return(
        <View style={styles.contatiner}>
            <View style={styles.inner}>
                 <Text style={styles.title}>Log in</Text>
                 <TextInput style={styles.input} value='Email Address'/>
                 <TextInput style={styles.input} value='Password' />
                    <Button label="submit" onPress={handlePress}/>
                 <View style={styles.footer}>
                    <Text style={styles.footerText}>not registered?</Text>
                    <Link href="/auth/sign_up" asChild>
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