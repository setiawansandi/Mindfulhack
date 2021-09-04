import * as React from "react";
import { Text, View, Linking } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';

function ContactsScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Card style={{width:290, marginTop: 20}}>
        <Card.Content>
          <Title style={{fontStyle: "bold"}}>TOUCH Community Services</Title>
          <Paragraph>TOUCH provides counselling support for youths, and counselling on marital issues/parenting, emotional and mental distress</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button color="#ADD8E6" mode="contained" onPress={() => Linking.openURL('https://www.touch.org.sg/keeping-our-community-safe')}>
          Find out more
          </Button>
        </Card.Actions>
      </Card>

      <Card style={{width:290, marginTop: 20}}>
        <Card.Content>
          <Title style={{fontStyle: "bold"}}>SAGE Counselling Centre</Title>
          <Paragraph>SAGE provides counselling to seniors age 50 years and </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button color="#ADD8E6" mode="contained" onPress={() => console.log('Pressed')}>
          Find out more
          </Button>
        </Card.Actions>
      </Card>

      <Card style={{width:290, marginTop: 20}}>
        <Card.Content>
          <Title style={{fontStyle: "bold"}}>Singapore Association for Mental Health</Title>
          <Paragraph>SAMH provides counselling and support sevices for persons with mental illness and their families</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button color="#ADD8E6" mode="contained" onPress={() => console.log('Pressed')}>
          Find out more
          </Button>
        </Card.Actions>
      </Card>
      
       <Card style={{width:290, marginTop: 20, marginBottom: 15}}>
        <Card.Content>
          <Title style={{fontStyle: "bold"}}>Tinkle Friend (for Children)</Title>
          <Paragraph>Tinkle Friend provides support and information to lonely or distress children in need</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button color="#ADD8E6" mode="contained" onPress={() => console.log('Pressed')}>
          Find out more
          </Button>
        </Card.Actions>
      </Card>

    </ScrollView>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Counsellor" component={ContactsScreen} />
    </Stack.Navigator>
  );
}