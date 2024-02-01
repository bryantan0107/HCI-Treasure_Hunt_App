import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import globalStyles from "../../styles.js";

// button for listing the cities that are not avaliable
export default class AlertButton extends Component {
  render() {
    return (
      <TouchableNativeFeedback>
        <View style={styles.sectionHeader}>
          <Text style={globalStyles.heading}>
            <Text style={{ color: "#969696" }}>{this.props.content}</Text>
          </Text>
          <Text
            style={{
              color: "#969696",
              fontFamily: "HelveticaNeue-Light",
              fontSize: 16,
            }}
          >
            Not yet available
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
const styles = StyleSheet.create({
  sectionHeader: {
    display: "absolute",
    paddingTop: 0,
  },
});
