import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Banner</Text>
      <TouchableOpacity style={{ backgroundColor: "blue" }}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: "blue" }}>
        <Text>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: "blue" }}>
        <Text>Appointment</Text>
      </TouchableOpacity>
      <TextInput
        style={{
          height: 25,
          borderColor: "black",
          borderWidth: 1,
          paddingLeft: 15,
        }}
        defaultValue="Search"
      />
      <Text>Book Appointment</Text>
      <Text>Email Sign up</Text>
    </View>
    /*
    white, red, gray , and dark gray color scheme
    goes in the view at the very bottom however im commenting it out cause i dont think we need this it seems more used for iphone or android apps
      <StatusBar style="auto" />
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
