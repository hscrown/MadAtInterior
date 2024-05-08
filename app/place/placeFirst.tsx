import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "@/constants/Colors";
import { router } from "expo-router";

const handleStart = () => {
  router.replace("place/placeLoading");
}

const placeFirst = () => {

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          source={require("@/assets/images/place/blub.png")}
          style={styles.blubImage}
        />
        <Text style={styles.infoTitle}>사용자 맞춤 장소 추천 서비스</Text>
        <Text style={styles.infoSubtitle}>
          머신러닝 알고리즘 장소 추천 서비스를 이용해보세요!
        </Text>
      </View>
      <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Image
          source={require("@/assets/images/buttonPurple.png")}
          style={styles.buttonBackground}
        />
        <Text style={styles.startButtonText}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.purple,
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  blubImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
    marginBottom: 10,
  },
  infoSubtitle: {
    fontSize: 16,
    color: Colors.white,
    textAlign: "center",
  },
  startButton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBackground: {
    width: 250,
    height: 60,
    resizeMode: "contain",
  },
  startButtonText: {
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
});

export default placeFirst;
