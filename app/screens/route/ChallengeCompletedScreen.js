import React, { Component } from "react";
import { Share, Text, View, StyleSheet, StatusBar } from "react-native";
import Button from "../../components/Button.js";
import globalStyles from "../../../styles.js";
import ConfettiCannon from "react-native-confetti-cannon";
import { FontAwesome } from "@expo/vector-icons";
import routesData from "../../dummyData/routes.json";

export default class ChallengeCompletedScreen extends Component {
  onShare = async (name, description, id) => {
    const result = await Share.share({
      message: name + ": " + description,
      url: "https://treasurehunt.app/route/" + id,
    });
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.routeId = this.props.route.params.routeId;
    this.state = {
      route: [],
    };
  }

  componentDidMount() {
    this.setState({ route: routesData.routes[this.routeId] });
  }

  render(navigation) {
    this.props.navigation.setOptions({
      headerRight: () => (
        <FontAwesome
          onPress={() =>
            this.onShare(this.state.route.name, this.state.route.description, this.state.route.id)
          }
          name="share-alt"
          size={30}
          color="#3BBCD9"
        />
      ),
    });
    return (
      <View style={globalStyles.contentContainer}>
        <StatusBar barStyle='dark-content' />
        <ConfettiCannon count={500} origin={{ x: -10, y: 0 }} fadeOut={true} />
        <View style={styles.star}>
          <FontAwesome name="star" size={300} color="#F2B705" />
        </View>
        <View style={styles.container}>
          <Text style={globalStyles.heading}>Route finished!</Text>
          <Text style={globalStyles.text}>
            {
              "We hope you enjoyed the route through the city. Why don't you try out another one of your great tours?"
            }
          </Text>
        </View>
        <Button
          navigation={this.props.navigation}
          color={"#3BBCD9"}
          location={"HomeScreen"}
          content={"Try another route"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    bottom: 100,
    width: "100%",
    position: "absolute",
    padding: 30,
  },
  star: {
    alignItems: "center",
    top: 0,
    width: "100%",
    bottom: 100,
    padding: 15,
    justifyContent: "center",
    position: "absolute",
  },
});
