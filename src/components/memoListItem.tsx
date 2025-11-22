import { View, Text,TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Icon from "./icon";

import { type Memo } from "../../types/memo";

interface Props {
  memo: Memo
}

const memoListitem = (props : Props): JSX.Element | null => {
  const { memo } = props;
  const { updatedAt,bodyText } = memo;
  if(updatedAt===null || bodyText===null){
    return null
  }
  const dataString =updatedAt.toDate().toLocaleString('ja-JP')
    return(
        <Link 
        href={{pathname:"/memo/detail",params:{id:memo.id}}} 
        asChild
        >
                            <TouchableOpacity style={styles.memoListItem}>
                  <View>
                    <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
                    <Text style={styles.memoListItemDate}>{dataString}</Text>
                  </View>
                  <TouchableOpacity>
                    <Icon name="delete" size={32} color="#b0b0b0" />
                  </TouchableOpacity>
                </TouchableOpacity>
        </Link>
    )
}
const styles = StyleSheet.create({
      memoListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
})
export default memoListitem;