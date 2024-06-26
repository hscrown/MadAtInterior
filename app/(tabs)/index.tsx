import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useHeaderHeight } from '@react-navigation/elements';
import { router } from "expo-router";
import * as Location from 'expo-location';
import Colors from '@/constants/Colors';

const handleWeather = () => {
  router.push("weathers");
};

const handleMaps = () => {
  router.push("maps");
};

const handlePlace = () => {
  router.push("place");
};

const handleBorough = () => {
  router.push("borough");
};

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState('전체');
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState('사용자 위치 정보를 불러오고 있습니다...');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('위치 접근 권한이 거부되었습니다.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      if (location) {
        const { latitude, longitude } = location.coords;
        setLatitude(latitude);
        setLongitude(longitude);

        try {
          let reverseGeocode = await Location.reverseGeocodeAsync({ latitude, longitude });
          if (reverseGeocode.length > 0) {
            let address = reverseGeocode[0];
            setAddress(`${address.city} ${address.street} ${address.streetNumber} (${address.postalCode})`);
          }
        } catch (error) {
          setErrorMsg('주소를 가져오는 중 오류가 발생했습니다.');
        }
      }
    })();
  }, []);

  const onCatChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/FigureTop.png")}
        />
      </View>
      <View style={styles.container}>
        <View style={[styles.topBar]}>
          <FontAwesome name="map-marker" size={24} color="black" />
          <Text style={styles.location}>
            {errorMsg ? errorMsg : address}
          </Text>
          <FontAwesome name="user-circle-o" size={30} color="black" />
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#B0B0B0"
        />
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Lemon MuL</Text>
          <Text style={styles.bannerSubText}>:Free to Go everywhere!</Text>
          <TouchableOpacity style={styles.startButton} onPress={handleMaps}>
            <Text style={styles.startButtonText}>시작하기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.gridButton, styles.blueButton]} onPress={handleBorough}>
            <Text style={styles.gridButtonText}>서울시 탐색</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gridButton, styles.orangeButton]}>
            <Text style={styles.gridButtonText}>리뷰 / 평가</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gridButton, styles.greenButton]} onPress={handleWeather}>
            <Text style={styles.gridButtonText}>날씨 기반 추천 서비스</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gridButton, styles.yellowButton]} onPress={handlePlace}>
            <Text style={styles.gridButtonText}>사용자 맞춤 추천 서비스</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  imageContainer: { height: "20%", backgroundColor: Colors.white },
  image: { width: "100%", height: 130 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  location: {
    flex: 1,
    marginLeft: 10,
    color: "black",
    fontWeight: "bold",
  },
  searchBar: {
    height: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  banner: {
    backgroundColor: "#d7e5a5",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
  },
  bannerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bannerSubText: {
    fontSize: 16,
    marginTop: 5,
  },
  startButton: {
    backgroundColor: "#4589ff",
    borderRadius: 20,
    marginTop: 15,
    alignSelf: "flex-end",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  startButtonText: {
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridButton: {
    width: "48%",
    height: 120,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },
  blueButton: {
    backgroundColor: "#5ea3ff",
  },
  orangeButton: {
    backgroundColor: "#ff715e",
  },
  greenButton: {
    backgroundColor: "#66d9a7",
  },
  yellowButton: {
    backgroundColor: "#ffcf5e",
  },
  gridButtonText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: 'center',
  },
});
