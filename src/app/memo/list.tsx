import { container } from "googleapis/build/src/apis/container";
import { memo } from "react";
import {  Text, View,StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import Header from "../../components/Header";
import MemoListItem from "../../components/memoListItem";
import Circlebutton from "../../components/circleButton";

const  List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>

        <MemoListItem />
        <MemoListItem />
        <MemoListItem />

      </View>
      <Circlebutton><Feather name="plus" size={40}/></Circlebutton>
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