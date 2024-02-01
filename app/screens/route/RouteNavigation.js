import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import routesData from "../../dummyData/routes.json";
import globalStyles from "../../../styles.js";
import PushButton from "../../components/PushButton.js";
import MapView from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

//Shows map to navigate to location
export default class RouteNavigation extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.routeId = this.props.route.params.routeId;
    this.count = this.props.route.params.count;
    this.state = {
      challenge: [],
    };
  }

  componentDidMount() {
    this.setState({
      challenge: routesData.routes[this.routeId].challenges[this.count],
    });
  }

  render() {
    return (
      <View style={globalStyles.contentContainer}>
        <MapView
          region={{
            latitude: this.state.challenge.latitude,
            longitude: this.state.challenge.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          userInterfaceStyle={"dark"}
          style={{ width: "100%", height: "80%" }}
          mapType={"standard"}
          showsUserLocation={true}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.state.challenge.latitude,
              longitude: this.state.challenge.longitude,
            }}
            centerOffset={{ x: 0, y: -16 }}
          >
            <View>
              <FontAwesome name="map-marker" size={60} color="#3BBCD9" />
            </View>
          </MapView.Marker>
        </MapView>

        <View style={globalStyles.navigationContainer}>
          <Text style={globalStyles.question}>
            <Text style={{ color: "#3BBCD9" }}>Go to:</Text>
          </Text>
          <Text style={globalStyles.heading}>{this.state.challenge.name}</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={globalStyles.text}>
              Find a way to get to the destination. Once you arrive, click the
              "Explore stop" button to challenge the quiz!
            </Text>
            <Text style={globalStyles.space}></Text>
          </ScrollView>
        </View>
        {this.state.challenge.type === "multiple" && (
          <PushButton
            navigation={this.props.navigation}
            color={"#3BBCD9"}
            location={"RouteQuizMultipleChoice"}
            options={{ routeId: this.routeId, count: this.count }}
            content={"Explore stop"}
          />
        )}
        {this.state.challenge.type === "text" && (
          <PushButton
            navigation={this.props.navigation}
            color={"#3BBCD9"}
            location={"HomeScreen"}
            options={{ routeId: this.routeId, count: this.count }}
            content={"Explore stop"}
          />
        )}
      </View>
    );
  }
}
