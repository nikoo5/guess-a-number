import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from "./screens/StartGameScreen"

export default function App() {
  const [userNumber, setUserNumber] = useState(-1);
  const [guessRounds, setGuessRounds] = useState(0)

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(-1);
  }

  const startGameHandler = (selectedNumber) => {
    setGuessRounds(0);
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />
  if(userNumber >= 0 && guessRounds == 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if(guessRounds > 0) {
    content = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onNewGame={newGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <View style={styles.body}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  body: {
    flex: 1
  }
});
