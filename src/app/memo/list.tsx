import { container } from "googleapis/build/src/apis/container";
import { memo } from "react";
import {  Text, View,StyleSheet } from "react-native";

import Header from "../../components/Header";
import MemoListItem from "../../components/memoListItem";
import Circlebutton from "../../components/circleButton";
import Icon from "../../components/icon";



const  List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>

        <MemoListItem />
        <MemoListItem />
        <MemoListItem />

      </View>
      <Circlebutton>
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