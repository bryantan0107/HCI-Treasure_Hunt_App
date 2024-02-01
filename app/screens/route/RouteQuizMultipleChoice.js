import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";

import routesData from "../../dummyData/routes.json";

import globalStyles from "../../../styles.js";
import QuizButton from "../../components/QuizButton.js";
import SkipButton from "../../components/SkipButton.js";
import { LinearGradient } from "expo-linear-gradient";


//Multiple-choice quiz
export default class RouteQuizMultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.routeId = this.props.route.params.routeId;
    this.count = this.props.route.params.count;
    this.state = {
      challenge: [],
      answers: [],
    };
  }

  componentDidMount() {
    this.setState({
      challenge: routesData.routes[this.routeId].challenges[this.count],
    });
    this.setState({
      answers: routesData.routes[this.routeId].challenges[this.count].answers,
    });
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
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <Text style={globalStyles.question}>
              <Text style={{ color: "#3BBCD9" }}>Question: </Text>
              {this.state.challenge.question}
            </Text>

            <View style={globalStyles.quizContainer}>
              {this.state.answers.map((answer) => {
                return (
                  <QuizButton
                    key={answer.name}
                    navigation={this.props.navigation}
                    color={"#3BBCD9"}
                    location={"RouteQuizInformations"}
                    options={{
                      routeId: this.routeId,
                      count: this.count,
                      correct: answer.correct,
                    }}
                    content={answer.text}
                  />
                );
              })}
            </View>
            <Text style={globalStyles.space}></Text>
          </ScrollView>
        </View>
        <View
          style={{
            height: "10%",
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
        <SkipButton
          navigation={this.props.navigation}
          location={"RouteQuizInformations"}
          options={{
            routeId: this.routeId,
            count: this.count,
            correct: "skip",
          }}
        />
      </View>
    );
  }
}
