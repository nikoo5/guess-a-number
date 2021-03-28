import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors";
import language from "../constants/language";

const GameOverScreen = (props) => {
    const lang = props.language == "ES" ? language.es : language.us;

    return (
      <View style={styles.screen}>
        <Card style={styles.cardContainer}>
          <Text style={styles.title}>{lang.gameOverScreen.title}</Text>
          <View style={styles.numberContainer}>
            <Text>{lang.gameOverScreen.number}</Text>
            <NumberContainer color={Colors.Primary}>{props.userNumber}</NumberContainer>
          </View>
          <View style={styles.numberContainer}>
            <Text>{lang.gameOverScreen.rounds}</Text>
            <NumberContainer>{props.roundsNumber}</NumberContainer>
          </View>
          <Button
            color={Colors.btnPrimary}
            title={lang.gameOverScreen.new_game}
            onPress={props.onNewGame}
          />
        </Card>
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    cardContainer: {
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 50
    },
    numberContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    }
})

export default GameOverScreen;