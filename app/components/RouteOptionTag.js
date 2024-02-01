import React, { Component } from "react";
import { Text, View } from "react-native";

export default class RouteOptionTag extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.color,
          borderStyle: "solid",
          borderRadius: 1000,
          padding: 5,
          paddingLeft: 10,
          paddingRight: 10,
          alignSelf: "flex-start",
          marginRight: 7,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 11,
            fontFamily: "HelveticaNeue-Bold",
          }}
        >
          {this.props.content}
        </Text>
      </View>
    );
  }
}
