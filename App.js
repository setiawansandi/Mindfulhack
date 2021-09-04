import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import EventsScreen from "./screens/EventsScreen";
import ContactsScreen from "./screens/ContactsScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Appbar } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            //Set the icon based on which route it is (name of the tab)
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Symptoms") {
              iconName = "info";
            } else if (route.name === "Counsellor") {
              iconName = focused ? "user" : "user-o";
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "darkblue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Symptoms" component={EventsScreen} />
        <Tab.Screen name="Counsellor" component={ContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
