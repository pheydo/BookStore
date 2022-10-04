import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/Entypo";
import { DATA } from "../assets/ConstantDATA";

const { width, height } = Dimensions.get("window");

const Home = ({navigation}) => {

  const morebooks = ({ item }) => (
    <View >
      <TouchableOpacity
      onPress={()=>navigation.navigate("Readscreen",{...item})}
      style={Styles.morebooks}
      >
        <Image style={Styles.image3} source={item.image} />
     
      <View style={Styles.booktitle}>
        <Text>{item.title1}</Text>
        <Text>{item.title2}</Text>
        <Text>{item.title3}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={Styles.safe}>
      <View style={Styles.V1}>
        <View style={Styles.V11}>
          <Image style={Styles.image1} source={require("../assets/book.png")} />
          <Text style={Styles.T1}>Books</Text>
        </View>
        <View style={Styles.V11}>
          <Icon name="bell" size={23} style={Styles.icon1} />
          <Icon name="magnifying-glass" size={23} style={Styles.icon1} />
        </View>
      </View>

      <View style={Styles.V2}>
        <ImageBackground
          style={Styles.image2}
          source={require("../assets/Group1.png")}
          resizeMode={"stretch"}
        >
          <Text style={Styles.Accient}>Accient food of the old</Text>
        </ImageBackground>
      </View>
      <View style={Styles.popularbookV}>
        <Text style={Styles.popularbook}>Popular Books</Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={morebooks}
      />
    </SafeAreaView>
  );
};

export default Home;

const Styles = StyleSheet.create({
  V1: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  V2: { justifyContent: "center" },
  V3: { flexDirection: "row" },

  V11: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image1: { height: 25, width: 25, marginHorizontal: 7 },
  image2: {
    height: height*0.49,
    width:width*0.95,
    alignSelf: "center",
    borderRadius: 50,
    justifyContent: "flex-end",
  },
  image3: { height: 70, width: 90, borderRadius: 6, left: 7 },

  icon1: { marginHorizontal: 7 },

  T1: { fontSize: 18, fontWeight: "bold" },
  morebooks: { flexDirection: "row", padding: 10 },
  popularbookV: { left: 15, top: 6,marginBottom:15 },
  popularbook: { fontSize: 20,fontWeight:"bold" },
  booktitle: { left: 15 },
  Accient: { color: "white", width: width * 0.25, left: 10 },
});
