import React from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'

const Home = ({navigation}) => {
    
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.welcome}>Welcome back,</Text>
            <Text style={styles.userName}>Eric Atsu</Text>
            
            <View style={styles.actions}>
            {['Topup', 'Receive', 'Sent', 'Loan'].map((action) => (
                <TouchableOpacity key={action} style={styles.actionButton}>
                <Text style={styles.actionText}>{action}</Text>
                </TouchableOpacity>
            ))}
            </View>
  
            <Text style={styles.sectionTitle}>Transactions</Text>
            <View style={styles.transactionList}>
            {[
                { id: 1, amount: '$300', description: 'Money Transfer' },
                { id: 2, amount: '- $88', description: 'Grocery Shopping' },
                { id: 3, amount: '- $5.99', description: 'Apple Store' },
                { id: 4, amount: '- $12.99', description: 'Spotify' },
            ].map((transaction) => (
                <View key={transaction.id} style={styles.transactionItem}>
                <Text style={styles.transactionAmount}>{transaction.amount}</Text>
                <Text style={styles.transactionDescription}>{transaction.description}</Text>
                </View>
            ))}
            </View>
  
            <TouchableOpacity 
            style={styles.cardButton} 
            onPress={() => navigation.navigate('CardDetails')}
            >
            <Text style={styles.cardText}>Card Details</Text>
            </TouchableOpacity>
      </ScrollView> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    welcome: {
      fontSize: 18,
      fontWeight: '600',
    },
    userName: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 20,
    },
    actionButton: {
      backgroundColor: '#f0f0f0',
      padding: 15,
      borderRadius: 10,
    },
    actionText: {
      fontSize: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '600',
    },
    transactionList: {
      marginVertical: 20,
    },
    transactionItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
    },
    transactionAmount: {
      fontSize: 16,
    },
    transactionDescription: {
      fontSize: 16,
      color: '#555',
    },
    cardButton: {
      backgroundColor: '#f0f0f0',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    cardText: {
      fontSize: 16,
    },
  });

export default Home