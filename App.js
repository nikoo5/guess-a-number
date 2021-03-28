import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from "./screens/StartGameScreen"

export default function App() {
  const [userNumber, setUserNumber] = useState(-1);
  const [guessRounds, setGuessRounds] = useState(0);
  const [language, setLanguage] = useState("ES");

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

  let content = <StartGameScreen onStartGame={startGameHandler} language={language} />
  if(userNumber >= 0 && guessRounds == 0) {
    content = (
      <GameScreen
        userChoice={userNumber}
        onGameOver={gameOverHandler}
        language={language}
      />
    );
  } else if(guessRounds > 0) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onNewGame={newGameHandler}
        language={language}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header language={language} />
      <View style={styles.body}>{content}</View>
      <Footer onLangSelect={setLanguage} />
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
