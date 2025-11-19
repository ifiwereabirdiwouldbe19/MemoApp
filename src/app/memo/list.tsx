import {  Text,View,StyleSheet } from "react-native";
import { useEffect } from "react";

import MemoListItem from "../../components/memoListItem";
import Circlebutton from "../../components/circleButton";
import Icon from "../../components/icon";
import { router,useNavigation } from "expo-router";
import LogOutButton from "../../components/LogOutButton";

const onPress=():void=>{
    router.push('/memo/create');
}

const  List = (): JSX.Element => {
            const navigation = useNavigation();
    useEffect(() => {
    navigation.setOptions({
        headerRight : () => {
            return(<LogOutButton />)
        }
    });
    },[ ])

  return (
    <View style={styles.container}>
      <View>

        <MemoListItem />
        <MemoListItem />
        <MemoListItem />

      </View>
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