import * as React from "react";
import { Text, View, Linking} from "react-native";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar, Card, Title, Paragraph, Button, Searchbar } from 'react-native-paper';

function EventsScreen({ navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Card style={{width:300, marginTop: 10}}>
        <Card.Title title="Depression"/>
        <Card.Cover source={{ uri: 'https://images.everydayhealth.com/images/how-to-cope-with-anxiety-and-depression-722x406.jpg' }} />
        <Card.Content>
            <Paragraph style={{padding: 5}}><Text style={{fontWeight: "bold"}}>Depression (major depressive disorder) </Text> is a common and serious medical illness that negatively affects how you feel, the way you think and how you act.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button color="lightblue" mode="contained" onPress={() => Linking.openURL('https://www.psychiatry.org/patients-families/depression/what-is-depression')}>
          Learn More
          </Button>
        </Card.Actions>
      </Card>

      <Card style={{width:300, marginTop: 10}}>
        <Card.Title title="PTSD"/>
        <Card.Cover source={{ uri: 'https://images.everydayhealth.com/images/migraine-and-ptsd-knowing-the-risk-and-relationship-1440x810.jpg' }} />
        <Card.Content>
            <Paragraph style={{padding: 5}}><Text style={{fontWeight: "bold"}}>Post-traumatic stress disorder (PTSD)</Text> is an anxiety disorder caused by very stressful, frightening or distressing events.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button color="lightblue" mode="contained" onPress={() => console.log('Pressed')}>
          Learn More
          </Button>
        </Card.Actions>
      </Card>

      <Card style={{width:300, marginTop: 10, marginBottom: 10}}>
        <Card.Title title="Bipolar"/>
        <Card.Cover source={{ uri: 'https://cdn1.stayprepared.sg/wp-content/uploads/sites/13/2020/09/understanding_bipolar_disorder_01.jpg' }} />
        <Card.Content>
            <Paragraph style={{padding: 5}}><Text style={{fontWeight: "bold"}}>Bipolar disorder</Text> is a mental health condition that causes extreme mood swings that include emotional highs and lows (depression).</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button color="lightblue" mode="contained" onPress={() => console.log('Pressed')}>
          Learn More
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
      <Stack.Screen name="Symptoms" component={EventsScreen} />
    </Stack.Navigator>
  );
}