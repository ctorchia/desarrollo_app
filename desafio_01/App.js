import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Mi primer App!</Text>
      <Text style={styles.descriptionText}>(Cristian Torchia)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: { 
    fontSize: 30, 
    color: 'red' 
  },
  descriptionText: { 
    fontSize: 20, 
    color: 'blue' 
  },
});
