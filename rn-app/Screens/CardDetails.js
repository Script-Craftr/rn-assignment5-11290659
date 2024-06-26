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
    backgroundColor: '#f5f5f5',
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  cardHolder: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333',
  },
  expiryDate: {
    fontSize: 16,
    color: '#333',
  },
  cvv: {
    fontSize: 16,
    color: '#333',
  },
  cardType: {
    fontSize: 16,
    marginTop: 10,
    color: '#007bff',
  },
});

export default CardDetails;
