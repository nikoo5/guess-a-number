import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
    return (
      <View style={styles.screen}>
        <Card style={styles.cardContainer}>
          <Text style={styles.title}>The Game is Over!</Text>
          <View style={styles.numberContainer}>
            <Text>User number</Text>
            <NumberContainer color={Colors.Primary}>{props.userNumber}</NumberContainer>
          </View>
          <View style={styles.numberContainer}>
            <Text>Number of rounds</Text>
            <NumberContainer>{props.roundsNumber}</NumberContainer>
          </View>
          <Button
            color={Colors.btnPrimary}
            title="NEW GAME"
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
        width: 250,
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