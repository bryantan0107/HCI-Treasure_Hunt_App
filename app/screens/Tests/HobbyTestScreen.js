import React, { Component } from "react";
import { Text, View, ScrollView, TouchableNativeFeedback, Image, StyleSheet } from "react-native";

import globalStyles from "../../../styles.js";
import SkipButton from "../../components/SkipButton.js";

//Part of the Test for the taste of the customer
export default class HobbyTestScreen extends Component {

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
    }

    render() {
        return (
            <View>
                <View style={styles.container}>

                    <Text style={globalStyles.heading}>What do you like to do in your free time?</Text>


                    <TouchableNativeFeedback

                        onPress={() => this.props.navigation.navigate("WalksTestScreen")}>
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
                            }} source={{ uri: "https://cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/H47HVU2CB5DPNBV6Z353AKPXQ4.jpeg" }} />
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                fontFamily: "Optima-Bold",
                                marginLeft: 40
                            }}>
                                Read
                            </Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        style={{ width: "100%" }}
                        onPress={() => this.props.navigation.navigate("WalksTestScreen")}>
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
                            }} source={{ uri: "https://images.wunderweib.de/istock-1057872152,id=9ee506a2,b=wunderweib,w=1600,h=,ca=0,7.81,100,92.19,rm=sk.jpeg" }} />
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                fontFamily: "Optima-Bold",
                                marginLeft: 40
                            }}>
                                Shopping
                            </Text>
                        </View>
                    </TouchableNativeFeedback>


                    <TouchableNativeFeedback
                        style={{ width: "100%" }}
                        onPress={() => this.props.navigation.navigate("WalksTestScreen")}>
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
                            }} source={{ uri: "https://drugpolicy.org/sites/default/files/crowd-at-concert_0.png" }} />
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                fontFamily: "Optima-Bold",
                                marginLeft: 40
                            }}>
                                Going out
                            </Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        style={{ width: "100%" }}
                        onPress={() => this.props.navigation.navigate("WalksTestScreen")}>
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
                            }} source={{ uri: "https://www.zillertal.at/fileadmin/_processed_/4/e/csm_BikeHike_Wimbachkopf_77_buehne_c_zillertaltourismus_monepic_eab1301b62.jpg" }} />
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                fontFamily: "Optima-Bold",
                                marginLeft: 40
                            }}>
                                Hiking
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
                    <SkipButton navigation={this.props.navigation} location={"WalksTestScreen"} />
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