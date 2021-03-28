import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Footer = (props) => {
    return (
      <View style={styles.screen}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={props.onLangSelect.bind(this, "ES")}
          >
            <Image
              style={styles.image}
              source={require("../assets/img/ES.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={props.onLangSelect.bind(this, "EN")}
          >
            <Image
              style={styles.image}
              source={require("../assets/img/US.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        marginHorizontal: 10
    }
});

export default Footer;