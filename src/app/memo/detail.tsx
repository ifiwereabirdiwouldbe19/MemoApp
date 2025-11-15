import { View, Text, ScrollView, StyleSheet } from "react-native";

import Header  from "../../components/Header";
import Circlebutton from "../../components/circleButton";
import { container } from "googleapis/build/src/apis/container";
import { memo } from "react";

const Detail = (): JSX.Element => {
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年10月1日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    Lorem, ipsum dolor sit
                     amet consectetur adipisicing elit. Ducimus 
                     voluptas,
                      suscipit at id sit doloremque ea cumque
                       recusandae sunt?
                       Harum dignissimos officia corporis 
                       recusandae magnam quasi
                        libero perferendis pariatur nulla!
                </Text>
            </ScrollView>
            <Circlebutton style={{ top :160}}>+</Circlebutton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    memoHeader: {
        backgroundColor: "#467FD3",
        height: 96,
        justifyContent: "center",
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: "#FFFFFF",
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
    },
    memoDate: {
        color: "#FFFFFF",
        fontSize: 12,
        lineHeight: 16
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
    }
})

export default Detail;