import React, { Component } from "react";
import { Text, View } from "react-native";


//Adds a single Tag with props.color and props.content
export default class Tag extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.color,
          borderStyle: "solid",
          borderRadius: 1000,
          padding: 3,
          paddingLeft: 12,
          paddingRight: 12,
          alignSelf: "flex-start",
          marginRight: 7,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "HelveticaNeue-Bold",
          }}
        >
          {this.props.content}
        </Text>
      </View>
    );
  }
}
