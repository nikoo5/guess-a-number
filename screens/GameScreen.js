import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import language from "../constants/language";

const generateRandomBetween = (min, max, exclude) => {
    let rnd = Math.floor(Math.random() * (max - min)) + min;
    if(rnd == exclude) rnd = generateRandomBetween(min, max, exclude);
    return rnd;
}

const GameScreen = (props) => {
    const lang = props.language == "ES" ? language.es : language.us;

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(0, 100, props.userChoice));

    const currentLow = useRef(0);
    const currentHigh = useRef(100);
    const rounds = useRef(1);

    useEffect(() => {
        if(currentGuess == props.userChoice) {
            props.onGameOver(rounds.current);
        }
    }, [currentGuess])

    const nextGuessHandler = (direction) => {
        if ((direction == "lower" && currentGuess < props.userChoice) || (direction == "grater" && currentGuess > props.userChoice)) {
            Alert.alert(lang.gameScreen.alert.title, lang.gameScreen.alert.text, [{text: lang.gameScreen.alert.button, style:"cancel"}]);
            return;
        } 

        if(direction == "lower") {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }

        setCurrentGuess(generateRandomBetween(currentLow.current, currentHigh.current, currentGuess));
        rounds.current += 1;        
    }

    return (
      <View style={styles.screen}>
        <Text>{lang.gameScreen.text}</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonsContainer}>
          <Button
            title={lang.gameScreen.lower}
            onPress={nextGuessHandler.bind(this, "lower")}
          />
          <Button
            title={lang.gameScreen.grater}
            onPress={nextGuessHandler.bind(this, "grater")}
          />
        </Card>
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300
    }
});

export default GameScreen;