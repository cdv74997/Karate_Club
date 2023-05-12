import moment from "moment";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ClassInfo from "./ClassInfo";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  TextLink,
} from "react-native";

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":");
  const meridiem = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  return `${formattedHours}:${minutes} ${meridiem}`;
}

export default function Home() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState(moment());
  const [fetchedData, setFetchedData] = useState(null);
  //used for search
  const [search, setSearch] = useState("");

  const handleEmail = () => {
    //do something with the email like send it to the database

    //reset the input field
    setEmail("");
  };
  const handleSearch = () => {
    //do something here for the serach input
    setSearch("");
    console.log("sent serach");
  };
  const generateDates = () => {
    const dates = [];
    const startDate = moment();

    for (let i = 0; i < 6; i++) {
      dates.push(moment(startDate).add(i, "days"));
    }
    return dates;
  };

  

  return (
    <View style={styles.container}>
      {/*this is where we will have the top row which will contain all the usefull infor like home, the logo, contact us, appointments */}
      <View style={styles.topRow}>
        <Image
          source={require("./../assets/R.png")}
          alt="logo image"
          style={{
            background: "white",
            width: 120,
            height: 110,
            borderRadius: 0,
            marginLeft: 50,
          }}
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
          value={search}
          onChangeText={setSearch}
        />
        {/*this is where the search button will be at*/}
        <TouchableOpacity>
          <Image
            source={require("./../assets/Search-icon.png")}
            alt="search button image"
            style={{
              width: 35,
              height: 35,
            }}
          />
        </TouchableOpacity>
      </View>
      {/*this is where we have like images that play like a slideshow */}
      <View style={styles.banner}>
        <Image
          source={require("./../assets/R.jpg")}
          alt="Karate Image"
          style={{
            width: 450,
            height: 250,
          }}
        />
        <Image
          source={require("./../assets/maxresdefault.jpg")}
          alt="KarateImage"
          style={{
            width: 450,
            height: 250,
          }}
        />
        <Image
          source={require("./../assets/OIP (1).jpg")}
          alt="karateImage"
          style={{
            width: 450,
            height: 250,
          }}
        />
        <Image
          source={require("./../assets/OIP.jpg")}
          alt="KarateImage"
          style={{
            width: 450,
            height: 250,
          }}
        />
      </View>

      {/*this is where we have the book appointment with the calendar and all that stuff */}

      <View style={styles.middleRow}>
        <Text>Book Appointment</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {generateDates().map((date, index) => (
          <TouchableOpacity
            key={index}
            onPress={async () => {
              console.log("date (app)" + date);
              try {
                const dayNumber = date.weekday(); // Add this line to get the day number
                const response = await fetch(
                  `http://localhost:5000/api/data/?day=${dayNumber}` // Use the dayNumber here
                );
                const data = await response.json();
                const sortedData = data.sort((a, b) => {
                  const startA = moment.duration(a.start_time);
                  const startB = moment.duration(b.start_time);
                  return startA - startB;
                });
                console.log(sortedData);
                setFetchedData(sortedData);
              } catch (error) {
                console.error("Error:", error);
              }
              setSelectedDate(date);
            }}
            style={{
              backgroundColor: selectedDate.isSame(date, "day")
                ? "#007bff"
                : "#fff",
              paddingHorizontal: 10,
              height: 40,
              paddingVertical: 5,
              borderRadius: 5,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                color: selectedDate.isSame(date, "day") ? "#fff" : "#000",
              }}
            >
              {date.format("dddd, MMM D")}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView>
      
      <FlatList
        data={fetchedData}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text
              numberOfLines={1}
              style={[
                styles.listItemText,
                { flex: 7, width: 300, paddingRight: 40 },
              ]}
            >
              {item.name}
            </Text>
            <Text
              numberOfLines={1}
              style={[
                styles.listItemText,
                { flex: 5, width: 100, paddingRight: 20 },
              ]}
            >
              {item.instructor}
            </Text>
            <Text
              numberOfLines={1}
              style={[
                styles.listItemText,
                { flex: 2, width: 150, paddingRight: 10 },
              ]}
            >
              {formatTime(item.start_time)}
            </Text>
            <Text
              numberOfLines={1}
              style={[
                styles.listItemText,
                { flex: 2, width: 150, paddingRight: 10 },
              ]}
            >
              {formatTime(item.end_time)}
            </Text>
            {moment(item.start_time, "HH:mm").isBefore(moment()) &&
            moment().day() === item.day ? (
              <Text>Past</Text>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate("ClassInfo", { item, selectedDate })}
                style={{
                  backgroundColor: "#007bff",
                  color: 'white',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    color: 'white',
                  }} 
                >Book</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      </ScrollView>

      {/*this is where we have the bottom row where they can sign up for email and a lil about us page */}
      <View style={styles.bottomRow}>
        <Text style={styles.text}>
          Welcome to America's Best Karate in Chatsworth, CA Since 1990,
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
    //use if you want to change the screen height
    height: "150%",
  },

  textButtons: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  banner: {
    //paddingTop: 20,
    //paddingBottom: 20,
    marginBottom: "3%",
    display: "grid",
    gridTemplateColumns: "2fr 2fr 2fr 2fr 2fr",
    gridGap: 1,
    alignItems: "center",
  },

  topRow: {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 2fr 2fr 0.5fr 0.5fr",
    gridGap: 10,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#c33",
    width: "100%",
    paddingTop: 0,
    height: 110,
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
    height: "25%",
  },

  text: {
    alignItems: "center",
    color: "white",
    width: "80%",
    marginLeft: 100,
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
    marginRight: 0,
  },

  searchButton: {
    /*background: "white",
      width: 175,
      height: 150,
      borderRadius: 0,
      marginLeft: 180,
      */
    height: 25,
    borderColor: "white",
    borderWidth: 1,
    width: 70,
    backgroundColor: "",
    borderRadius: 20,
  },
  listItem: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  listItemText: {
    fontSize: 16,
    color: "#000",
  },
});
