import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import remove from './assets/remove.png';
import Logo from './assets/Logo.png';
import Search from './assets/Search.png';


const CartScreen = ({ route, navigation }) => {
  const { cart } = route.params;
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={Logo} />
        <Image source={Search} style={styles.searchIcon} />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cartDescription}>
              <Text style={styles.itemType}>{item.name}</Text>
              <Text style={styles.itemName}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.removeIcon} >
            <Image source={remove}   />

            </TouchableOpacity>
            {/* <Button title="Remove from Cart" onPress={() => removeFromCart(item)} /> */}
          </View>
        )}
      />
      {/* <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  searchIcon: {
    position: 'relative',
    left: 135
  },
  product: {
    // margin: 10,
    padding: 10,
    // borderWidth: 1,
    // borderColor: "#ddd",
    // borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    objectFit: 'contain',
    marginBottom: 10,
  },
  cartDescription: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
    fontFamily: 'Arial',
  },
  itemType: {
    fontSize: 20,
    fontFamily: "Arial",
    lineHeight: 20,
    textTransform: 'uppercase'
  },
  itemName: {
    fontSize: 13,
    color: "gray",
    lineHeight: 35,
    textTransform: 'capitalize'
  },
  itemPrice: {
    fontSize: 20,
    color: "#FFB668",
  },
  removeIcon: {
    position: 'relative',
    top: 50,
  }
});

export default CartScreen;
