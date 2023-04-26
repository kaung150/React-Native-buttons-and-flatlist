import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 60
    // justifyContent: 'center',
  },
});
