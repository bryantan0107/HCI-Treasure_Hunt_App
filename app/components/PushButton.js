import React, { Component } from "react";
import { Text, View, TouchableNativeFeedback } from "react-native";


//Feels like Button.js but instead of navigating, it always pushes to a new screen
export default class PushButton extends Component {
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
            alignSelf: "center",
            position: "absolute",
            bottom: "3%",
            zIndex: 14,

            width: "85%",
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
