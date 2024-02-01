import { StatusBar } from 'expo-status-bar';
import { StyleSheet, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RouteDetailScreen from './app/screens/route/RouteDetailScreen.js';
import RouteNavigation from './app/screens/route/RouteNavigation.js';
import RouteQuizMultipleChoice from './app/screens/route/RouteQuizMultipleChoice.js';
import RouteQuizInformations from './app/screens/route/RouteQuizInformations.js';
import HomeScreen from './app/screens/HomeScreen.js';
import IntroductionScreen from './app/screens/IntroductionScreen.js';
import SelectCityScreen from "./app/screens/SelectCityScreen.js";
import FavoritesScreen from "./app/screens/FavoritesScreen.js";
import ChallengeCompletedScreen from "./app/screens/route/ChallengeCompletedScreen.js";
import TasteTestScreen from "./app/screens/Tests/TasteTestScreen.js";
import HobbyTestScreen from "./app/screens/Tests/HobbyTestScreen";
import WalksTestScreen from "./app/screens/Tests/WalksTestScreen";
const Stack = createNativeStackNavigator();

global.favorites = [];
global.tutorialCompleted = false;

export default function App() {
  LogBox.ignoreAllLogs(); //To ignore all Warnings
  return (

    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerLargeTitle: true,
          headerTransparent: true
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "",
            headerTintColor: "#3BBCD9",
            headerBackTitleVisible: false
          }}>
        </Stack.Screen>
        <Stack.Screen
          name="IntroductionScreen"
          component={IntroductionScreen}
          options={{
            title: "",
            headerTintColor: "white",
            headerBackTitleVisible: false
          }}>
        </Stack.Screen>
        <Stack.Screen
          name="SelectCityScreen"
          component={SelectCityScreen}
          options={{
            title: "",
            headerTintColor: "#3BBCD9",
            headerBackTitleVisible: false
          }}>
        </Stack.Screen>
        <Stack.Screen
          name="RouteDetailScreen"
          component={RouteDetailScreen}
          options={{
            title: "",
            headerTintColor: "white",
            headerBackTitleVisible: false
          }}>
        </Stack.Screen>
        <Stack.Screen
          name="RouteQuizMultipleChoice"
          component={RouteQuizMultipleChoice}
          options={{
            title: "",
            headerTintColor: "white",
            headerBackTitleVisible: false
          }}>
        </Stack.Screen>
        <Stack.Screen
          name="RouteQuizInformations"
          component={RouteQuizInformations}
          options={{
            title: "",
            headerTintColor: "white",
            headerBackTitleVisible: false
          }}>
        </Stack.Screen>
        <Stack.Screen
          name="RouteNavigation"
          component={RouteNavigation}
          options={{
            title: "",
            headerTintColor: "white",
            headerBackTitleVisible: false
          }}>
        </Stack.Screen>
        <Stack.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{
            title: "",
            headerTintColor: "#3BBCD9",
            headerBackTitleVisible: false
          }}>
        </Stack.Screen>
        <Stack.Screen
          name="ChallengeCompletedScreen"
          component={ChallengeCompletedScreen}
          options={{
            title: "",
            headerTintColor: "#3BBCD9",
            headerBackTitleVisible: false
          }}>
        </Stack.Screen>
        <Stack.Screen
          name="TasteTestScreen"
          component={TasteTestScreen}
          options={{
            title: "",
            headerTintColor: "#3BBCD9",
            headerBackTitleVisible: false
          }}>
        </Stack.Screen>
        <Stack.Screen
          name="HobbyTestScreen"
          component={HobbyTestScreen}
          options={{
            title: "",
            headerTintColor: "#3BBCD9",
            headerBackTitleVisible: false
          }}>
        </Stack.Screen>
        <Stack.Screen
          name="WalksTestScreen"
          component={WalksTestScreen}
          options={{
            title: "",
            headerTintColor: "#3BBCD9",
            headerBackTitleVisible: false
          }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
