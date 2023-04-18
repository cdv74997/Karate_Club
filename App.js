import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const screenHeight = Dimensions.get("screen").height;

export default function App() {
  const [email, setEmail] = useState("");
  const handleEmail = () => {
    //do something with the email like send it to the database

    //reset the input field
    setEmail("");
  };
  return (
    <View style={styles.container}>
      {/*this is where we have like images that play like a slideshow */}
      <View style={styles.banner}>
        <Text>Banner</Text>
      </View>

      {/*this is where we will have the top row which will contain all the usefull infor like home, the logo, contact us, appointments */}
      <View style={styles.topRow}>
        <Image
          style={styles.logoImage}
          source={require("./karate-kid-logo-6.png")}
        />
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.textButtons}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.textButtons}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.textButtons}>Appointment</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          defaultValue="Search"
        />
      </View>

      {/*this is where we have the book appointment with the calendar and all that stuff */}
      <View style={styles.middleRow}>
        <Text>Book Appointment</Text>
      </View>

      {/*this is where we have the bottom row where they can sign up for email and a lil about us page */}
      <View style={styles.bottomRow}>
        <Text style={styles.text}>
          Welcome to America's Best Chatsworth in Chatsworth, CA Since 1990,
          America's Best Karate has been providing instruction in Tang Soo Do,
          Krav Maga and the martial arts in the Chatsworth, CA area. We hope you
          enjoy our website and will stop by and visit us if you are in the
          area. This site is designed to give you information about our
          facility, our style of martial arts, our staff and provide you with
          information on how to contact us as well.
        </Text>

        <View style={styles.Email}>
          <Text style={styles.emailText}>Sign up to recieve emails</Text>
          <TextInput
            placeholder="Enter your Email"
            style={styles.emailInput}
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={styles.emailButton} onPress={handleEmail}>
            <Text style={styles.emailButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logoImage: {
    color: "Black",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 100,
    backgroundColor: "white",
    paddingLeft: 80,
  },

  textButtons: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  banner: {
    paddingTop: 20,
    paddingBottom: 20,
  },

  topRow: {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 2fr 2fr 0.5fr",
    gridGap: 10,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#c33",
    width: "100%",
    marginBottom: "3%",
    height: 75,
  },

  middleRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    marginBottom: "3%",
    width: "50%",
  },

  bottomRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: 0,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#c33",
    width: "100%",
    height: "30%",
    /*
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    marginBottom: "3%",
    width: "50%",
    */
  },

  text: {
    alignItems: "center",
    color: "white",
    width: "80%",
    marginLeft: 90,
    fontSize: 20,
  },

  navButton: {
    backgroundColor: "#c33",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },

  ////Email
  emailInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "80%",
  },

  emailButton: {
    backgroundColor: "#c33",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "80%",
  },

  emailButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  Email: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: "50%",
    marginLeft: 150,
  },

  emailText: {
    fontSize: 25,
    marginBottom: 15,
  },

  searchInput: {
    height: 25,
    borderColor: "white",
    borderWidth: 1,
    paddingLeft: 15,
    backgroundColor: "white",
    borderRadius: 8,
    marginRight: 100,
  },
});
