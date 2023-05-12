import React, { useState } from "react";
import * as MailComposer from 'expo-mail-composer';
import Home from './Home';

const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION',
});
const ses = new AWS.SES({ apiVersion: '2010-12-01' });




import {
    StyleSheet,
    Text, 
    TextInput,
    TouchableOpacity,
    View
} from "react-native";


//const DOMAIN = "sandbox95447eafc7ff4bf1a9a7dff1c094c4f7.mailgun.org";
//const mg = mailgun({ apiKey: "08810b62d713dac6e81e8f359ce6edd8-6b161b0a-e8212d36", domain: DOMAIN })
function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  return `${formattedHours}:${minutes} ${meridiem}`;
}

export default function Confirmation({ navigation, route }) {
    const { item, selectedDate, firstName } = route.params;
    
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    

const handleFormSubmit = async () => {
  try {
    // Send email to host
    
    // Send email to user
    const userMessage = {
      recipients: [email],
      subject: 'Class Sign-Up Confirmation',
      body: `
        Hi ${firstName},
        Thank you for signing up for ${item.name} with ${item.instructor} on ${selectedDate.format('dddd, MMM D, YYYY')}.
        The class will be held from ${formatTime(item.start_time)} to ${formatTime(item.end_time)}.
        We look forward to seeing you there!
      `,
      isHtml: false,
    };
    await MailComposer.composeAsync(userMessage);
    // Clear form fields
    //navigation.navigate("Confirmation", { item, selectedDate, firstName });
    setFirstName("");
    setLastName("");
    setEmail("");
    
  } catch (error) {
    alert('Error sending email:', error);
  }
};


return (
  <View style={styles.container}>
      <Text style={styles.heading}>Thank You!</Text>
      <Text style={styles.subheading}>
        {firstName}, thank you for confirming your appointment for:
      </Text>
      <View style={styles.infoContainer}>
        <Text style={[styles.label, { textAlign: "right" }]}>Class Name:</Text>
        <Text style={[styles.value, { textAlign: "left" }]}>{item.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.label, { textAlign: "right" }]}>Instructor:</Text>
        <Text style={[styles.value, { textAlign: "left" }]}>{item.instructor}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.label, { textAlign: "right" }]}>Day:</Text>
        <Text style={[styles.value, { textAlign: "left" }]}>
          {selectedDate.format("dddd")}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.label, { textAlign: "right" }]}>Date:</Text>
        <Text style={[styles.value, { textAlign: "left" }]}>
          {selectedDate.format("MMM D, YYYY")}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.label, { textAlign: "right" }]}>Start Time:</Text>
        <Text style={[styles.value, { textAlign: "left" }]}>
          {formatTime(item.start_time)}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.label, { textAlign: "right" }]}>End Time:</Text>
        <Text style={[styles.value, { textAlign: "left" }]}>
          {formatTime(item.end_time)}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "80%",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    alignItems: "left",
    fontSize: 18,
    flex: 1,
    textAlign: "left",
    
  },
  value: {
    marginLeft: 10,
    fontSize: 18,
    flex: 1,
    textAlign: "left",
    paddingLeft: 10
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});