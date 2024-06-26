import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
      <Text style={styles.cardHolder}>AR Jonson</Text>
      <Text style={styles.expiryDate}>Expiry Date: 24/2000</Text>
      <Text style={styles.cvv}>CVV: 6986</Text>
      <Text style={styles.cardType}>Mastercard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardHolder: {
    fontSize: 18,
    marginVertical: 10,
  },
  expiryDate: {
    fontSize: 16,
  },
  cvv: {
    fontSize: 16,
  },
  cardType: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default CardDetails;
