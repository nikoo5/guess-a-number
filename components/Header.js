import React from "react";
import { View, Text, StyleSheet } from "react-native";
import language from "../constants/language";
import Colors from "./../constants/colors"

const Header = (props) => {
    const lang = props.language == "ES" ? language.es : language.us;

    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{lang.header.title}</Text>
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