import React, { useState } from "react";
import * as MailComposer from 'expo-mail-composer';

import Confirmation from './Confirmation';

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

export default function ClassInfo({ navigation, route }) {
    const { item, selectedDate } = route.params;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    

const handleFormSubmit = async () => {
  try {
    // Send email to host
    
    // Send email to user
    const userMessage = {
      recipients: [email],
      subject: 'Karate Club Class Sign-Up Confirmation',
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
    navigation.navigate("Confirmation", { item, selectedDate, firstName })
  } catch (error) {
    alert('Error sending email:', error);
  }
};


return (
  <View style={styles.container}>
  <Text style={styles.heading}>Course Info</Text>
  <View style={styles.infoContainer}>
    <Text style={[styles.label, { textAlign: 'right' }]}>Class Name:</Text>
    <Text style={[styles.value, { textAlign: 'left' }]}>{item.name}</Text>
  </View>
  <View style={styles.infoContainer}>
    <Text style={[styles.label, { textAlign: 'right' }]}>Instructor:</Text>
    <Text style={[styles.value, { textAlign: 'left' }]}>{item.instructor}</Text>
  </View>
  <View style={styles.infoContainer}>
    <Text style={[styles.label, { textAlign: 'right' }]}>Day:</Text>
    <Text style={[styles.value, { textAlign: 'left' }]}>{selectedDate.format('dddd')}</Text>
  </View>
  <View style={styles.infoContainer}>
    <Text style={[styles.label, { textAlign: 'right' }]}>Date:</Text>
    <Text style={[styles.value, { textAlign: 'left' }]}>{selectedDate.format('MMM D, YYYY')}</Text>
  </View>
  <View style={styles.infoContainer}>
    <Text style={[styles.label, { textAlign: 'right' }]}>Start Time:</Text>
    <Text style={[styles.value, { textAlign: 'left' }]}>{formatTime(item.start_time)}</Text>
  </View>
  <View style={styles.infoContainer}>
    <Text style={[styles.label, { textAlign: 'right' }]}>End Time:</Text>
        <Text style={[styles.value, {textAlign: 'left'}]}>{formatTime(item.end_time)}</Text>
      </View>
        <Text style={styles.heading}>Confirm Appointment</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={setFirstName}
          value={firstName}
        
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={setLastName}
          value={lastName}
        
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        
        />
        <TouchableOpacity 
          style={styles.button}
          
          onPress={handleFormSubmit}
        >
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        

    </View>
);

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
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
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        width: "25%",
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    button: {
      backgroundColor: "#4CAF50",
      borderRadius: 5,
      padding: 10
  }
  
});