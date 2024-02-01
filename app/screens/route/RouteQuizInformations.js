import React, { Component } from "react";
import {
    Text,
    View,
    ScrollView,
    Image, StyleSheet,
} from "react-native";
import routesData from "../../dummyData/routes.json";
import globalStyles from "../../../styles.js";
import Button from "../../components/Button.js";
import PushButton from "../../components/PushButton.js";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";


//Displays informations about a location and if quiz got answered correctly
export default class RouteQuizInformations extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.routeId = this.props.route.params.routeId;
    this.count = this.props.route.params.count;
    this.correct = this.props.route.params.correct;

    this.state = {
      challenge: [],
      answers: [],
      nextChallenge: [],
    };
  }

  componentDidMount() {
    this.setState({
      challenge: routesData.routes[this.routeId].challenges[this.count],
    });

    //Checks if current challenge is the last one or if there are more
    if (this.count < routesData.routes[this.routeId].challenges.length - 1) {
      this.setState({ nextChallenge: "navigation" });
    } else {
      this.setState({ nextChallenge: "completed" });
    }
  }

  render() {
    return (
      <View style={globalStyles.contentContainer}>
        <Image
          style={globalStyles.image}
          source={{ uri: this.state.challenge.image }}
        />
        <View style={globalStyles.textContainer}>
          <Text style={globalStyles.heading}>
            <Text style={{ color: "#3BBCD9" }}>Stop {this.count + 1}: </Text>
            {this.state.challenge.name}
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 30,
                paddingBottom: 20,
                alignItems: "center",
              }}
            >
              {this.correct == false && (
                <FontAwesome name="times-circle" size={40} color="#3BBCD9" />
              )}
              {this.correct == true && (
                <FontAwesome name="check-circle" size={40} color="#3BBCD9" />
              )}
              {this.correct === "skip" && (
                <FontAwesome name="info-circle" size={40} color="#3BBCD9" />
              )}
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: "bold",
                  fontFamily: "Optima-Bold",

                  paddingLeft: 10,
                  maxWidth: "80%",
                }}
              >
                {this.state.challenge.correctAnswer}
              </Text>
            </View>
            <Text style={globalStyles.text}>
              {this.state.challenge.description}
            </Text>
              <Text style={styles.tipp}>Tipp:</Text>
              <Text style={globalStyles.text}>{this.state.challenge.tipp}</Text>
            <Text style={globalStyles.space}></Text>

          </ScrollView>
        </View>
        <View
          style={{
            height: "20%",
            width: "100%",
            position: "absolute",
            zIndex: 3,
            bottom: 0,
          }}
        >
          <LinearGradient
            colors={[
              "rgba(255, 255, 255, 0)",
              "rgba(255, 255, 255, 1)",
              "rgba(255, 255, 255, 1)",
              "rgba(255, 255, 255, 1)",
            ]}
          >
            <View
              style={{
                height: "100%",
                width: "100%",
              }}
            ></View>
          </LinearGradient>
        </View>
        {this.state.nextChallenge === "navigation" && (
          <PushButton
            navigation={this.props.navigation}
            color={"#3BBCD9"}
            location={"RouteNavigation"}
            options={{ routeId: this.routeId, count: this.count + 1 }}
            content={"To next stop"}
          />
        )}
        {this.state.nextChallenge === "completed" && (
          <Button
            navigation={this.props.navigation}
            color={"#3BBCD9"}
            location={"ChallengeCompletedScreen"}
            options={{ routeId: this.routeId, count: this.count + 1 }}
            content={"Finish route"}
          />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
    tipp: {

        fontSize: 21,
        fontWeight: "bold",
        fontFamily: "Optima-Bold",
        color: "#F24141",
        flex: 1,
        paddingTop: 10,
    },
});