import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Colors from "./../constants/colors";

const StartGameScreen = (props) => {
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
          Alert.alert("Invalid Number!", "Number mas be between 0 and 99.", [{text: "Okay", style: "destruction"}])
        }        
    }

    let cardOutput;

    if(confirmed) {
      cardOutput = (
        <Card style={styles.summaryContainer}>
          <Text>You Selected</Text>
          <NumberContainer>{selectedNumber}</NumberContainer>

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="CANCEL"
                color={Colors.btnAccent}
                onPress={resetButtonHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="START"
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
          <Text>Select a Number</Text>
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
                title="Reset"
                color={Colors.btnAccent}
                onPress={resetButtonHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
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
          <Text style={styles.title}>Start a New Game!</Text>          
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
        width: 90
    },
    summaryContainer: {
      width: 300
    }
});

export default StartGameScreen;