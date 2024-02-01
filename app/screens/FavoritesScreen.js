import React, { Component } from "react";
import {
  Text,
  View,
  TouchableNativeFeedback,
  ScrollView,
  Image,
  StatusBar
} from "react-native";
import globalStyles from "../../styles.js";
import RouteOptionTag from "../components/RouteOptionTag";
import { SearchBar } from "react-native-elements";


//Displays favorite routes
export default class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;

    this.state = {
      routes: global.favorites,
      routesFilter: global.favorites,
      search: "",
    };
  }
  // this function take the info from search and filter all names of the routes
  updateSearch = (search) => {
    if (search) {
      const newData = this.state.routes.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const itemData1 = item.duration.toString() ? item.duration.toString().toUpperCase() : "".toUpperCase();
        const itemData2 = item.distance.toString() ? item.distance.toString().toUpperCase() : "".toUpperCase();
        const itemData3 = item.difficulty ? item.difficulty.toUpperCase() : "".toUpperCase();
        const itemData4 = item.start ? item.start.toUpperCase() : "".toUpperCase();
        const itemData5 = item.theme ? item.theme.toUpperCase() : "".toUpperCase();
        const searchData = search.toUpperCase();
        return itemData.indexOf(searchData) > -1 ||
          itemData1.indexOf(searchData) > -1 ||
          itemData2.indexOf(searchData) > -1 ||
          itemData3.indexOf(searchData) > -1 ||
          itemData4.indexOf(searchData) > -1 ||
          itemData5.indexOf(searchData) > -1;
      });
      this.setState({ routesFilter: newData });
      this.setState({ search: search });
    } else {
      this.setState({ routesFilter: this.state.routes });
      this.setState({ search: search });
    }
  };

  //Reload screen on focus
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener("focus", () => {
      this.forceUpdate();
    });
  }
  render() {
    const { search } = this.state;
    return (
      <View style={globalStyles.contentContainer}>
        <StatusBar barStyle='dark-content' />
        <View style={globalStyles.homeHeadContainer}>
          <Text style={globalStyles.heading}>Favorites</Text>
          <View>
            <SearchBar
              placeholder="Search"
              onChangeText={(search) => {
                this.updateSearch(search);
              }}
              onClear={(search) => {
                this.updateSearch("");
              }}
              value={search}
              platform={"ios"}
              inputContainerStyle={{
                backgroundColor: "#F3F3F3",
                marginLeft: 0,
                marginRight: 0,
              }}
              inputStyle={{
                fontFamily: "HelveticaNeue-Light",
                fontSize: 17,
              }}
              cancelButtonProps={{
                color: "#3BBCD9",
              }}
            />
          </View>
        </View>

        <ScrollView style={globalStyles.routeOptionContainer}>
          {this.state.routesFilter.map((route, i) => {
            return (
              <TouchableNativeFeedback
                key={i}
                style={{ width: "100%" }}
                onPress={() =>
                  this.props.navigation.navigate("RouteDetailScreen", {
                    routeId: route.id,
                  })
                }
              >
                <View style={globalStyles.routeOption}>
                  <Image
                    style={globalStyles.imageCircle}
                    source={{ uri: route.image }}
                  />

                  <View>
                    <Text style={globalStyles.routeTextHeading}>
                      {route.name}
                    </Text>
                    <Text style={globalStyles.routeText}>
                      {route.description.slice(0, 43) + "..."}
                    </Text>
                    <View style={globalStyles.routeTagFirst}>
                      <RouteOptionTag
                        content={route.distance + " km"}
                        color={"#F2B705"}
                      />
                      <RouteOptionTag
                        content={route.duration + " min"}
                        color={"#BF9075"}
                      />
                      <RouteOptionTag
                        content={route.difficulty}
                        color={"#F24141"}
                      />
                    </View>
                  </View>
                </View>
              </TouchableNativeFeedback>
            );
          })}
          <Text style={{ paddingBottom: 80 }}></Text>
        </ScrollView>
      </View>
    );
  }
}
