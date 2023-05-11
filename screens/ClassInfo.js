import React, { useState } from "react";


import {
    StyleSheet,
    Text, 
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
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

    

const handleFormSubmit = () => {

};

return (
    <View style={styles.container}>
        <Text style={styles.heading}>Course Info</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Class Name:</Text>
        <Text style={styles.value}>{item.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Instructor:</Text>
        <Text style={styles.value}>{item.instructor}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Day:</Text>
        <Text style={styles.value}>{selectedDate.format('dddd')}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{selectedDate.format('MMM D, YYYY')}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Start Time:</Text>
        <Text style={styles.value}>{formatTime(item.start_time)}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>End Time:</Text>
        <Text style={styles.value}>{formatTime(item.end_time)}</Text>
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
        textAlign: "left",
        
      },
      value: {
        marginLeft: 10,
        fontSize: 18,
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