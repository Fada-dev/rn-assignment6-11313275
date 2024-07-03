import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import remove from './assets/remove.png';

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
  product: {
    // margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    // borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 200,
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
    lineHeight: 20,
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
