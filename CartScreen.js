import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Image } from 'react-native';

const CartScreen = ({ route, navigation }) => {
  // const { cart } = route.params;
  // const [cartItems, setCartItems] = useState(cart);

  // useEffect(() => {
  //   setCartItems(cart);
  // }, [cart]);

  // const removeFromCart = (product) => {
  //   setCartItems(cartItems.filter(item => item.id !== product.id));
  // };

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Button title="Remove from Cart" onPress={() => removeFromCart(item)} />
          </View>
        )}
      />
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 10,
  // },
  // product: {
  //   margin: 10,
  //   padding: 10,
  //   borderWidth: 1,
  //   borderColor: '#ddd',
  //   borderRadius: 5,
  //   alignItems: 'center',
  // },
  // image: {
  //   width: 150,
  //   height: 200,
  //   marginBottom: 10,
  // },
});

export default CartScreen;
