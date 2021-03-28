import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Colors from "./../constants/colors";
import language from "../constants/language";

const StartGameScreen = (props) => {  
    const lang = props.language == "ES" ? language.es : language.us;

    const [enteredValue, setEnteredValue] = useState("");
    const [selectedNumber, setSelectedNumber] = useState(0)
    const [confirmed, setConfirmed] = useState(false)


    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    }

    const resetButtonHandler = () => {
        setEnteredValue("");
        setConfirmed(false);
    }

    const confirmButtonHandler = () => {
        const num = parseInt(enteredValue);
        if(!isNaN(num) && num >= 0 && num <= 99) {
            setSelectedNumber(num);
            setConfirmed(true);
        } else {
          Alert.alert(lang.startGameScreen.alert.title, lang.startGameScreen.alert.text, [{text: lang.startGameScreen.alert.button, style: "destruction"}])
        }        
    }

    let cardOutput;

    if(confirmed) {
      cardOutput = (
        <Card style={styles.summaryContainer}>
          <Text>{lang.startGameScreen.selected}</Text>
          <NumberContainer>{selectedNumber}</NumberContainer>

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title={lang.startGameScreen.cancel}
                color={Colors.btnAccent}
                onPress={resetButtonHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={lang.startGameScreen.start}
                color={Colors.btnPrimary}
                onPress={() => {
                  props.onStartGame(selectedNumber);
                }}
              />
            </View>
          </View>
        </Card>
      );
    } else {
      cardOutput = (
        <Card style={styles.inputContainer}>
          <Text>{lang.startGameScreen.select}</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title={lang.startGameScreen.reset}
                color={Colors.btnAccent}
                onPress={resetButtonHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={lang.startGameScreen.confirm}
                color={Colors.btnPrimary}
                onPress={confirmButtonHandler}
              />
            </View>
          </View>
        </Card>
      );
    }

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.screen}>
          <Text style={styles.title}>{lang.startGameScreen.title}</Text>
          {cardOutput}
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300
    },
    input: {
        width: 50,
        textAlign: "center",
        fontSize: 40,
        height: 40
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around"
    },
    button: {
        width: 100
    },
    summaryContainer: {
      width: 300
    }
});

export default StartGameScreen;