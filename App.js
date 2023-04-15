import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text>Banner</Text>
      </View>
      <View style={styles.topRow}>
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
      <View style={styles.middleRow}>
        <Text>Book Appointment</Text>
      </View>
      <View style={styles.bottomRow}>
        <Text>Email Sign up</Text>
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
    gridTemplateColumns: "1fr 1fr 1fr auto",
    gridGap: 10,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#c33",
    width: "100%",
    marginBottom: "3%",
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
    padding: 10,
    paddingBottom: 100,
    backgroundColor: "lightgray",
    marginBottom: "3%",
    width: "50%",
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
  },
});
