import React, { useState } from "react"; // Importing React and useState from the 'react' library
import Confirmation from './Confirmation'; // Importing the 'Confirmation' component

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"; // Importing necessary components from the 'react-native' library

// Function to format time in a specific way
function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':'); // Splitting the time string into hours and minutes
  const meridiem = hours >= 12 ? 'PM' : 'AM'; // Determining the meridiem (AM or PM)
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12; // Formatting the hours in 12-hour format
  return `${formattedHours}:${minutes} ${meridiem}`; // Returning the formatted time string
}

export default function ClassInfo({ navigation, route }) {
  const { item, selectedDate } = route.params; // Extracting the course object and selected date from the route parameters
  const [firstName, setFirstName] = useState(""); // Setting up state for the first name
  const [lastName, setLastName] = useState(""); // Setting up state for the last name
  const [email, setEmail] = useState(""); // Setting up state for the email

  const handleFormSubmit = async () => { // Asynchronous function to handle form submission
    try {
      const response = await fetch('https://agile-chamber-00240.herokuapp.com/send-email', { // Sending a POST request to the specified URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Setting the request header to indicate JSON data
        },
        body: JSON.stringify({ // Converting the data to JSON format
          from: process.env.SMTP_HOST, // Sender's email address (retrieved from the environment)
          to: [email], // Recipient's email address
          subject: 'Registration for ' + item.name, // Email subject
          body: `Hello, ${firstName}\nThis email confirms you have signed up for ${item.name} with instructor ${item.instructor}. The class will take place on ${selectedDate.format('dddd')}, ${selectedDate.format('dddd, MMM D, YYYY')} going from ${formatTime(item.start_time)} to ${formatTime(item.end_time)}` // Email body
        })
      });
  
      if (response.ok) { // If the response status is successful
        setFirstName(""); // Clear the first name field
        setLastName(""); // Clear the last name field
        setEmail(""); // Clear the email field
        navigation.navigate("Confirmation", { item, selectedDate, firstName }); // Navigate to the Confirmation screen with necessary data
      } else {
        alert('Failed to send email. Please try again later.'); // Show an alert if the email sending fails
      }
    } catch (error) {
      alert('Error sending email:', error); // Show an alert if there is an error in sending the email
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