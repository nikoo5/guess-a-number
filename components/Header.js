import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "./../constants/colors"

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 35,
        backgroundColor: Colors.header,
        justifyContent: "center",
        alignItems: "center"
    },
    headerTitle: {
        color: "#FFFFFF",
        fontSize: 20
    }
});

export default Header;