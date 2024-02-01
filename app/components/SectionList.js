import React, { Component } from "react";
import { Text, TouchableNativeFeedback } from "react-native";
import globalStyles from "../../styles.js";

// Button for Listing the cities
export default class SectionListBasics extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() =>
          this.props.navigation.navigate(
            this.props.location,
            this.props.options
          )
        }
      >
        <Text style={globalStyles.heading}>{this.props.content}</Text>
      </TouchableNativeFeedback>
    );
  }
}
