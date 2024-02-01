import React, { Component } from "react";
import { Text, View, TouchableNativeFeedback } from "react-native";


//Button to skip quiz
export default class Button extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() =>
          this.props.navigation.push(this.props.location, this.props.options)
        }
      >
        <View
          style={{
            borderStyle: "solid",
            borderRadius: 20,
            padding: 18,
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 5,
            alignSelf: "center",
            position: "absolute",
            bottom: "2%",
            zIndex: 14,

            width: "85%",
          }}
        >
          <Text
            style={{
              color: "#686868",
              fontSize: 16,
              fontFamily: "HelveticaNeue",
              textAlign: "center",
            }}
          >
            Skip question
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
