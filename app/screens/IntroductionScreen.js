import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import Button from "../components/Button.js";
import globalStyles from "../../styles.js";

function tutorialComplete() {
    global.tutorialComplete = true;
}

export default class IntroductionScreen extends Component {

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
    }

    render(navigation) {
        return (
            <View style={globalStyles.contentContainer}>
                <StatusBar barStyle='dark-content' />
                <View style={styles.container}>
                    <Text style={globalStyles.heading}>Welcome to TreasureHunt</Text>
                    <Text style={globalStyles.text}>
                        {"Make your journey like a treasure hunt.\n\nTreasureHunt is a treasure hunt-based itinerary planning app that brings travelers unprecedented travel experiences based on their needs and interests.\n\nOur team aims to inspire people to gradually explore new places without planning ahead.\n\nClick the Let's go!\" button below now to start your journey!"}
                    </Text>
                </View>
                <Button onPress={() => tutorialComplete()} navigation={this.props.navigation} color={"#3BBCD9"} location={"TasteTestScreen"} content={"Let's go!"} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: "25%",
        width: "100%",
        position: "absolute",
        padding: 30
    },
});