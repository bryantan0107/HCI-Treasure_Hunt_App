import React, { Component } from "react";
import { Text, View, ScrollView, TouchableNativeFeedback, Image, StyleSheet } from "react-native";

import globalStyles from "../../../styles.js";
import SkipButton from "../../components/SkipButton.js";

//Part of the Test for the taste of the customer
export default class TasteTestScreen extends Component {

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
    }



    render() {
        return (
            <View>
                <View style={styles.container}>

                    <Text style={globalStyles.heading}>What is your favorite food?</Text>


                    <TouchableNativeFeedback

                        onPress={() => this.props.navigation.navigate("HobbyTestScreen")}>
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
                            }} source={{ uri: "https://lakeside-village.co.uk/wp-content/uploads/2021/11/LakesideVillage-SweetEmporium-Hero.jpg" }} />
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                fontFamily: "Optima-Bold",
                                marginLeft: 40
                            }}>
                                Sweets
                            </Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        style={{ width: "100%" }}
                        onPress={() => this.props.navigation.navigate("HobbyTestScreen")}>
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
                            }} source={{ uri: "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2022/1/1/food-prevent-sun-tan.jpg" }} />
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                fontFamily: "Optima-Bold",
                                marginLeft: 40
                            }}>
                                Fruits
                            </Text>
                        </View>
                    </TouchableNativeFeedback>


                    <TouchableNativeFeedback
                        style={{ width: "100%" }}
                        onPress={() => this.props.navigation.navigate("HobbyTestScreen")}>
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
                            }} source={{ uri: "https://www.falcortravels.com/wp-content/uploads/2018/10/making_italian_pasta_and_pizza_1-1024x683.jpg" }} />
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                fontFamily: "Optima-Bold",
                                marginLeft: 40
                            }}>
                                Pizza
                            </Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        style={{ width: "100%" }}
                        onPress={() => this.props.navigation.navigate("HobbyTestScreen")}>
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
                            }} source={{ uri: "https://img.taste.com.au/NGH-TdgW/taste/2019/11/seafood-platter-taste-156004-2.jpg" }} />
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                fontFamily: "Optima-Bold",
                                marginLeft: 40
                            }}>
                                Seafood
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
                    <SkipButton navigation={this.props.navigation} location={"HobbyTestScreen"} />
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