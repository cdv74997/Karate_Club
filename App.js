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
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Appointment</Text>
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
  },
  middleRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomRow: {
    padding: 10,
    paddingBottom: 100,
  },
  navButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  searchInput: {
    height: 25,
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 15,
  },
});
