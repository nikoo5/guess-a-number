import React from 'react';
import { View, Text, StyleSheet, ProgressViewIOSComponent } from "react-native";
import Colors from '../constants/colors';

const NumberContainer = (props) => {
    
    if(!props.color) {
        return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
        );
    } else {        
        return (
          <View style={{...styles.container, ...{borderColor: props.color}}}>
            <Text style={{...styles.number, ...{color: props.color}}}>{props.children}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        borderWidth: 2,
        borderColor: Colors.btnAccent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        color: Colors.Accent,
        fontSize: 50
    }
});

export default NumberContainer;