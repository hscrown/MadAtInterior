import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "@/constants/Colors";

const weatherFinish = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("@/assets/images/buttonBackgroundBlue.png")}
          style={styles.buttonBackground}
        />
        <Text style={styles.buttonText}>좋아요!</Text>
      </View>
      <Text style={styles.title}>은평 구립 도서관에서</Text>
      <Text style={styles.title}>좋은 하루 보내세요!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/weather/SeoulLib.png")}
          style={styles.placeImage}
        />
      </View>
      <Image
        source={require("@/assets/images/finishFace.png")}
        style={styles.finishFace}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  buttonBackground: {
    width: 150,
    height: 30,
    resizeMode: "contain",
  },
  buttonText: {
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.black,
    textAlign: "center",
    marginBottom: 10,
  },
  imageContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  placeImage: {
    width: 300,
    height: 180,
    resizeMode: "cover",
  },
  finishFace: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default weatherFinish;
