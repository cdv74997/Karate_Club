import { StatusBar } from "expo-status-bar";
import React from "react";
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
          <Text style={styles.text}>Email Sign up</Text>
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

  Email: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
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
    marginBottom: "3%",
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
    width: "70%",
    marginLeft: 40,
    fontSize: 17,
  },

  navButton: {
    backgroundColor: "#c33",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
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
