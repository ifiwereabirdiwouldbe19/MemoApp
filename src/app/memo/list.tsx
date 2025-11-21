import {  Text,View,StyleSheet,FlatList } from "react-native";
import { use, useEffect ,useState} from "react";
import { collection, onSnapshot, query ,orderBy} from "firebase/firestore";

import MemoListItem from "../../components/memoListItem";
import Circlebutton from "../../components/circleButton";
import Icon from "../../components/icon";
import { router,useNavigation } from "expo-router";
import LogOutButton from "../../components/LogOutButton";
import { db,auth } from "../../config";
import { type Memo } from "../../../types/memo";

const onPress=():void=>{
    router.push('/memo/create');
}

const  List = (): JSX.Element => {
  const [memos,setMemos] = useState<Memo[]>([])
            const navigation = useNavigation();
    useEffect(() => {
    navigation.setOptions({
        headerRight : () => {
            return(<LogOutButton />)
        }
    });
    },[ ])
    useEffect(() => {
      if (auth.currentUser === null) { return; }
      const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
      const q = query(ref, orderBy('updatedAt', 'desc'));
      const unsubscribe =  onSnapshot(q, (snapshot) => {
        const remoteMemos: Memo[] =[]
        snapshot.forEach((doc) => {
          console.log(doc.data())
          const {bodyText, updatedAt} = doc.data();
          remoteMemos.push({
            id: doc.id,
            bodyText,
            updatedAt,
          })
        })
        setMemos(remoteMemos);
      })
      return unsubscribe;
    }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoListItem memo={item} />}
      />
      <Circlebutton onPress={onPress}>
        <Icon name="plus" size={40} color = "#ffffff" />
      </Circlebutton>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },



});

export default List