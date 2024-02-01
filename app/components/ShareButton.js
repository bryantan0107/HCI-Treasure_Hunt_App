import React, { Component } from "react";
import { TouchableNativeFeedback } from "react-native";

import Share from "react-native-share";
import { FontAwesome } from "@expo/vector-icons";

export default class ShareButton extends Component {
  onShare = async (options) => {
    try {
      await Share.open(options);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <TouchableNativeFeedback
        onPress={async () => {
          await this.onShare({
            title: "Share it with your friends",
            url: this.state.image,
            message: "My lovely travel experience",
          });
        }}
      >
        <FontAwesome name="share" size={24} color="black" />
      </TouchableNativeFeedback>
    );
  }
}
