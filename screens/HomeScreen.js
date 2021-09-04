import * as React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar, Card, Title, Paragraph, Button, IconButton, List } from 'react-native-paper';
import { Icon } from 'react-native-elements';

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
    <Card.Title
    style={{backgroundColor: 'white'}}
    title="Username"
    subtitle="@username"
    left={(props) => <Avatar.Icon {...props} icon="rocket" />}
    right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
  />
    <Card style={{width:320, marginTop: 10, backgroundColor: 'white'}}>
      <Card.Content>
        <Title style={{fontSize: 30}}>Welcome Back</Title>
        <Paragraph>@Username</Paragraph>
      </Card.Content>
      <Text style={{fontSize: 20, textAlign: "center", padding: 20}}>How are you feeling?</Text>
      <Card.Content>
        <Button style={{fontSize: 20, textAlign: "center", margin: 10}} mode= "contained" color='lightgreen'>Good</Button>
        <Button style={{fontSize: 20, textAlign: "center", margin: 10}} mode= "contained" color = 'pink'>Not Great</Button>
      </Card.Content>
    </Card>
    <Card style = {{width:320, marginTop: 30, backgroundColor: 'white'}}>
      <Card.Content>
        <Title style={{fontSize: 18}}>Ready to chat with me? 😀</Title>
        <Button style={{fontSize: 20, textAlign: "center", margin: 40}} mode= "contained" color = 'lightblue'> Take now </Button>
      </Card.Content>
    </Card>
    </View>
  );
}

const Stack = createStackNavigator();



export default function EventsStack() {
  return (
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
}