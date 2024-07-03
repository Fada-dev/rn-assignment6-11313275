import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import Menu from "./assets/Menu.png";
import Logo from "./assets/Logo.png";
import Search from "./assets/Search.png";
import shoppingBag from "./assets/shoppingBag.png";
import Listview from "./assets/Listview.png";
import Filter from "./assets/Filter.png";

const products = [
  {
    id: "1",
    name: "Office Wear",
    description: "reversible angora cardigan",
    price: "$120",
    image: require("./assets/dress1.png"),
  },
  {
    id: "2",
    name: "Black",
    description: "reversible angora cardigan",
    price: "$120",
    image: require("./assets/dress2.png"),
  },
  {
    id: "3",
    name: "Church Wear",
    description: "reversible angora cardigan",
    price: "$120",
    image: require("./assets/dress3.png"),
  },
  {
    id: "4",
    name: "Lamerei",
    description: "reversible angora cardigan",
    price: "$120",
    image: require("./assets/dress4.png"),
  },
];

const HomeScreen = ({ navigation }) => {
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Menu} />
        <View style={styles.logo}>
          <Image source={Logo} />
        </View>
        <View style={styles.searchContainer}>
          <Image source={Search} styles={styles.searchButton} />
          <Image source={shoppingBag} />
        </View>
      </View>
      <View style={styles.storyContainer}>
        <Text style={styles.storyText}>OUR STORY</Text>
        <View style={styles.actionContainer}>
          <View style={styles.actionBackgroundList}>
            <Image source={Listview} style={styles.listImage} />
          </View>
          <View style={styles.actionBackground}>
            <Image source={Filter} style={styles.filterImage} />
          </View>
        </View>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            {/* <Button title="Add to Cart" onPress={() => addToCart(item)} /> */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    position: "relative",
  },
  searchButton: {
    position: "absolute",
    borderWidth: 1,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    left: 20,
  },
  product: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  storyContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  storyText: {
    fontSize: 24,
    fontFamily: "Arial",
    letterSpacing: 6,
  },
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 'auto',
  },
  listImage: {
    width: 28,
    height: 28,
  },
  filterImage: {
    width: 28,
    height: 28
  },
  actionBackground: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#ECECEC",
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: "center",
  },
  actionBackgroundList: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#ECECEC",
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: "center",
    marginRight: 10
  }
});

export default HomeScreen;
