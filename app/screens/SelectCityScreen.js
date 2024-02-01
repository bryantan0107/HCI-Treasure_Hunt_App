import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, StatusBar } from "react-native";
import globalStyles from "../../styles.js";
import { SearchBar } from "react-native-elements";

import SectionList from "../components/SectionList.js";
import AlertButton from "../components/AlertButton";
//implemet helpArray for easier update to all elements
let helpArray = require("../dummyData/city.json");

//Select city screen when there are more then one available cities
export default class SelectCityScreen extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;

    this.state = {
      allCity: helpArray.city,
      cityFilter: helpArray.city,
      search: "",
    };
  }
  // this function take the info from search and filter all names of the routes
  updateSearch = (search) => {
    if (search) {
      const newData = this.state.allCity.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const searchData = search.toUpperCase();
        return itemData.indexOf(searchData) > -1;
      });
      this.setState({ cityFilter: newData });
      this.setState({ search: search });
    } else {
      this.setState({ cityFilter: this.state.allCity });
      this.setState({ search: search });
    }
  };

  render(navigation) {
    const { search } = this.state;
    return (
      <View style={styles.start}>
        <StatusBar barStyle='dark-content' />
        <Text style={globalStyles.heading}>Select your city</Text>

        <View>
          <SearchBar
            placeholder="Search your city..."
            onChangeText={(search) => {
              this.updateSearch(search);
            }}
            onClear={(search) => {
              this.updateSearch("");
            }}
            value={search}
            platform={"ios"}
            clearIcon={"false"}
            inputContainerStyle={{
              backgroundColor: "#F3F3F3",
              marginLeft: 0,
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
        <ScrollView>
          {this.state.cityFilter.map((item, i) => {
            return (
              <View key={i}>
                {item.id === 7 && (
                  <SectionList
                    navigation={this.props.navigation}
                    color={"#3BBCD9"}
                    location={"HomeScreen"}
                    content={item.name}
                  />
                )}
                {item.id !== 7 && (
                  <AlertButton available={item.available} content={item.name} />
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  start: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: "20%",
    padding: 20,
  },
});
