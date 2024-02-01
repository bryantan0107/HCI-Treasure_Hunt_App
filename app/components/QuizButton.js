import React, { Component } from "react";
import { Text, View, TouchableNativeFeedback } from "react-native";

//Button for multiple choice quiz
export default class QuizButton extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() =>
          this.props.navigation.push(this.props.location, this.props.options)
        }
      >
        <View
          style={{
            backgroundColor: this.props.color,
            borderStyle: "solid",
            borderRadius: 20,
            padding: 18,
            paddingLeft: 15,
            paddingRight: 15,
            marginTop: "8%",
            alignSelf: "center",
            zIndex: 14,
            width: "100%",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontFamily: "HelveticaNeue-Bold",
              textAlign: "center",
            }}
          >
            {this.props.content}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
