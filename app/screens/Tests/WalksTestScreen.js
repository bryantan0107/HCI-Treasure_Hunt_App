import React, { Component } from "react";
import { Text, View, ScrollView, TouchableNativeFeedback, Image, StyleSheet } from "react-native";

import globalStyles from "../../../styles.js";
import SkipButton from "../../components/SkipButton.js";

//Part of the Test for the taste of the customer
export default class WalksTestScreen extends Component {

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
    }

    render() {
        return (
            <View>
                <View style={styles.container}>

                    <Text style={globalStyles.heading}>Where do you like to go on walks?</Text>


                    <TouchableNativeFeedback

                        onPress={() => this.props.navigation.navigate("SelectCityScreen")}>
                        <View style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: "10%"
                        }}>
                            <Image style={{
                                backgroundColor: "white",
                                height: 80,
                                width: 80,
                                borderRadius: 100,
                            }} source={{ uri: "https://www.p.city-walks.info/Wien/Kaerntner-Strasse-Wien.jpg" }} />
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                fontFamily: "Optima-Bold",
                                marginLeft: 40
                            }}>
                                City center
                            </Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        style={{ width: "100%" }}
                        onPress={() => this.props.navigation.navigate("SelectCityScreen")}>
                        <View style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: "10%"
                        }}>
                            <Image style={{
                                backgroundColor: "white",
                                height: 80,
                                width: 80,
                                borderRadius: 100,
                            }} source={{ uri: "https://lovingnewyork.de/wp-content/uploads/2019/08/Central-Park-Mall-190806152546001.jpg" }} />
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                fontFamily: "Optima-Bold",
                                marginLeft: 40
                            }}>
                                Park
                            </Text>
                        </View>
                    </TouchableNativeFeedback>


                    <TouchableNativeFeedback
                        style={{ width: "100%" }}
                        onPress={() => this.props.navigation.navigate("SelectCityScreen")}>
                        <View style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: "10%"
                        }}>
                            <Image style={{
                                backgroundColor: "white",
                                height: 80,
                                width: 80,
                                borderRadius: 100,
                            }} source={{ uri: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/seaside-walk-scott-carruthers.jpg" }} />
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                fontFamily: "Optima-Bold",
                                marginLeft: 40
                            }}>
                                Seaside
                            </Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        style={{ width: "100%" }}
                        onPress={() => this.props.navigation.navigate("SelectCityScreen")}>
                        <View style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 30
                        }}>
                            <Image style={{
                                backgroundColor: "white",
                                height: 80,
                                width: 80,
                                borderRadius: 100,
                            }} source={{ uri: "http://www.ecotoursjapan.com/images/hiking-walking-eco-tours-japan-1.jpg" }} />
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                fontFamily: "Optima-Bold",
                                marginLeft: 40
                            }}>
                                Mountains
                            </Text>
                        </View>
                    </TouchableNativeFeedback>

                </View>
                <View style={{
                    borderRadius: 20,
                    padding: 18,
                    paddingLeft: 15,
                    paddingRight: 15,
                    alignSelf: "center",
                    position: "absolute",
                    bottom: "2%",
                    zIndex: 14,

                    width: "85%"
                }
                }>
                    <SkipButton navigation={this.props.navigation} location={"SelectCityScreen"} />
                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    Question: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Optima-Bold",

    },
    Text: {
        marginLeft: 40,
        marginTop: 40,
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Optima-Bold",
    },
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        paddingTop: "20%",
        padding: 20,
    }
});