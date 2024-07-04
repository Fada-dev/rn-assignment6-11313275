import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import remove from './assets/remove.png';
import Logo from './assets/Logo.png';
import Search from './assets/Search.png';

const CartScreen = ({ route, navigation }) => {
  const { cart } = route.params;
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem("cart");
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error("Failed to load cart from local storage", error);
      }
    };

    loadCart();
  }, []);

  const removeFromCart = async (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);

    try {
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Failed to update cart in local storage", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={Logo} />
        <Image source={Search} style={styles.searchIcon} />
      </View>
      <View style={styles.checkContainer}>
        <Text style={styles.checkText}>Checkout</Text>
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
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    right: -10
  },
  searchIcon: {
    position: 'relative',
    left: 130
  },
  checkContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  checkText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: "Arial",
    letterSpacing: 6,
  },
  product: {
    padding: 10,
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
