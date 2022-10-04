import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/Entypo";
import { AntDesign } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const { width, height } = Dimensions.get("window");

//TOP TAB COMPONENTS
function Synopsis() {
  return (
    <View style={Styles.tabsBox}>
      <Text>
        Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium. Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium. Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium. Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium
      </Text>
    </View>
  );
}

function Details() {
  return (
    <View style={Styles.tabsBox}>
      <Text> Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium. Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium. Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium. Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium</Text>
    </View>
  );
}

function Author() {
  return (
    <View style={Styles.tabsBox}>
      <Text> Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium. Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium. Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium. Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium</Text>
    </View>
  );
}

function Reviews() {
  return (
    <View style={Styles.tabsBox}>
      <Text> Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium. Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium. Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium. Synopsis is a medicine of loren ipsium,Synopsis is a medicine of loren
        ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a medicine of
        loren ipsium,Synopsis is a medicine of loren ipsium,Synopsis is a
        medicine of loren ipsium,Synopsis is a medicine of loren ipsium</Text>
    </View>
  );
}

const Readscreen = ({ route, navigation }) => {
  const [showSynopsis, setShowSynopsis] = useState(false);

  const { Navigator, Screen } = createMaterialTopTabNavigator();
  const itemfromeBooks = route.params;
  return (
    <SafeAreaView style={Styles.safe}>
      <View style={Styles.topicon}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        <Text style={Styles.Bookinfo}>Book info</Text>

        <Icon name="bookmark" size={30} />
      </View>

      <View>
        <Image source={itemfromeBooks.image} style={Styles.readbook} />
      </View>

      <View style={Styles.booktitleprice}>
        <View>
          <Text style={Styles.booktitle}>{itemfromeBooks.title1}</Text>
          <Text>{itemfromeBooks.title2}</Text>
        </View>
        <View>
          <Text style={Styles.bookprice}>$500</Text>
        </View>
      </View>

      <View style={Styles.Bookinfo1}>
        <View style={[Styles.Bookinfo2, Styles.elevation]}>
          <Text style={Styles.BookinfoText}>released</Text>
          <Text style={Styles.BookinfoText}>2021</Text>
        </View>
        <View style={[Styles.Bookinfo2, Styles.elevation]}>
          <Text style={Styles.BookinfoText}>Part </Text>
          <Text style={Styles.BookinfoText}>16</Text>
        </View>
        <View style={[Styles.Bookinfo2, Styles.elevation]}>
          <Text style={Styles.BookinfoText}>Pages</Text>
          <Text style={Styles.BookinfoText}>340</Text>
        </View>
      </View>

      {/*--------------------------------------------- TOP TAB BAR------------------------------------------------- */}

      <View style={Styles.tabContainer}>
        <Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: width*0.03 },
            tabBarItemStyle: { width: width*0.23 },
            tabBarStyle: { backgroundColor: "#fff", width:width*0.9 },
            tabBarActiveTintColor: "black",
            tabBarIndicatorStyle: { backgroundColor: "black" },
          }}
        >
          <Screen name="Synopsis" component={Synopsis} />
          <Screen name="Details" component={Details} />
          <Screen name="Author" component={Author} />
          <Screen name="Reviews" component={Reviews} />
        </Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Readscreen;

const Styles = StyleSheet.create({
  readbook: {
    top: height * 0.03,
    height: 210,
    width: "94%",
    alignSelf: "center",
    resizeMode: "cover",
    borderRadius: 15,
  },

  topicon: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  Bookinfo: { fontWeight: "bold", fontSize: 20 },
  booktitleprice: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    top: height * 0.03,
  },
  booktitle: { fontWeight: "bold", fontSize: 20, width: "50%" },

  bookprice: {
    top: 30,
    fontWeight: "bold",
  },
  Bookinfo1: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  Bookinfo2: {
    padding: 25,
    borderRadius: 15,

    height: 70,
    backgroundColor: "#fff",
    justifyContent: "center",
    width: 100,
  },
  BookinfoText: { alignSelf: "center" },
  elevation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  bookinfo3: {
    padding: 15,
  },
  tabContainer: {
    flex: 1,
    width: width * 0.9,
    alignSelf: "center",
  },
  tabsBox: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop:30
  },
});
