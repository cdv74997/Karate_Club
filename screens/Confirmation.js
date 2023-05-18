import React, { useState } from "react"; // Importing React and useState from the 'react' library
import Home from './Home'; // Importing the 'Home' component

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

export default function Confirmation({ navigation, route }) {
  const { item, selectedDate, firstName } = route.params; // Extracting necessary data from the route parameters

  const [lastName, setLastName] = useState(""); // Setting up state for the last name
  const [email, setEmail] = useState(""); // Setting up state for the email

    




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