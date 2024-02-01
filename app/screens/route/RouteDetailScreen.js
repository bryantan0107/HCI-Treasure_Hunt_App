import React, { Component } from "react";
import { Share, Text, View, ScrollView, Image, StyleSheet, StatusBar } from "react-native";

import routesData from "../../dummyData/routes.json";

import globalStyles from "../../../styles.js";
import Tag from "../../components/Tag.js";
import Button from "../../components/Button.js";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

//Adds favorite to global favorite array and removes it again if called again
function addToFavorites(
  name,
  id,
  description,
  image,
  duration,
  distance,
  difficulty
) {
  let route = {
    name: name,
    id: id,
    description: description,
    image: image,
    duration: duration,
    distance: distance,
    difficulty: difficulty,
  };
  let alreadyInserted = false;
  global.favorites.map((route) => {
    if (route.id == id) {
      alreadyInserted = true;
    }
  });

  if (alreadyInserted) {
    const indexOfObject = global.favorites.findIndex((object) => {
      return object.id === id;
    });
    global.favorites.splice(indexOfObject, 1);
  }
  if (!alreadyInserted) {
    global.favorites.push(route);
  }
}


//Initial screen of each route. Shows details and adds favorite-functionality
export default class RouteDetailScreen extends Component {
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
      nextChallenge: [],
      favorite: false,
    };
  }

  componentDidMount() {
    console.log("Route ID: " + this.routeId);
    this.setState({ route: routesData.routes[this.routeId] });
    this.setState({
      nextChallenge: routesData.routes[this.routeId].challenges[0],
    });

    global.favorites.map((artist) => {
      if (artist.id == this.routeId) {
        this.setState({ favorite: true });
      }
    });
  }

  render() {
    //Adds icon to navigation bar and toggles it based on if route is a favorite or not
    let favoriteIcon;
    if (this.state.favorite == true) {
      favoriteIcon = (
        <FontAwesome
          onPress={() => (
            addToFavorites(
              this.state.route.name,
              this.state.route.id,
              this.state.route.description,
              this.state.route.image,
              this.state.route.duration,
              this.state.route.distance,
              this.state.route.difficulty
            ),
            this.setState({ favorite: !this.state.favorite })
          )}
          name="heart"
          size={30}
          color="white"
        />
      );
    } else {
      favoriteIcon = (
        <FontAwesome
          onPress={() => (
            addToFavorites(
              this.state.route.name,
              this.state.route.id,
              this.state.route.description,
              this.state.route.image,
              this.state.route.duration,
              this.state.route.distance,
              this.state.route.difficulty
            ),
            this.setState({ favorite: !this.state.favorite })
          )}
          name="heart-o"
          size={30}
          color="white"
        />
      );
    }
    this.props.navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {favoriteIcon}
          <FontAwesome
            onPress={() =>
              this.onShare(this.state.route.name, this.state.route.description, this.state.route.id)
            }
            name="share-alt"
            size={30}
            color="white"
            style={{ paddingLeft: 15 }}
          />
        </View>
      ),
    });

    return (
      <View style={globalStyles.contentContainer}>
        <StatusBar barStyle='light-content' />
        <View
          style={{
            height: "20%",
            width: "100%",
            position: "absolute",
            zIndex: 3,
            top: 0,
          }}
        >
          <LinearGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0)"]}>
            <View
              style={{
                height: "100%",
                width: "100%",
              }}
            ></View>
          </LinearGradient>
        </View>
        <Image
          style={globalStyles.image}
          source={{ uri: this.state.route.image }}
        />
        <View style={globalStyles.textContainer}>
          <Text style={globalStyles.heading}>{this.state.route.name}</Text>
          <View style={globalStyles.tagContainer}>
            <Tag
              content={this.state.route.distance + " km"}
              color={"#F2B705"}
            />
            <Tag
              content={this.state.route.duration}
              color={"#BF9075"}
            />
            <Tag content={this.state.route.difficulty} color={"#F24141"} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={globalStyles.question}><Text style={{ color: "#3BBCD9" }}>Starting point:</Text> {this.state.route.start}</Text>
            <Text style={globalStyles.text}>
              {this.state.route.description}
            </Text>
              <Text style={styles.start}>Tickets prices & websites:</Text>
              <Text style={globalStyles.text}>{this.state.route.tickets}</Text>
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
        <Button
          navigation={this.props.navigation}
          color={"#3BBCD9"}
          location={"RouteNavigation"}
          options={{ routeId: this.state.route.id, count: 0 }}
          content={"Start"}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  start: {

    fontSize: 21,
    fontWeight: "bold",
    fontFamily: "Optima-Bold",
    color: "black",
    flex: 1,
    paddingTop: 10,
  },
});
