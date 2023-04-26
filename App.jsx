import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Pressable, TextInput, FlatList } from 'react-native';
import IconSettings from './IconSettings';
import { AntDesign } from '@expo/vector-icons';

export default function App() {


  const onPress = () => {
    Alert.alert('Touchable Opacity Pressed');
  }

  const [text, setText] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/aww.json')
      .then(response => response.json())
      .then(resultsFromServer => {
        setResult(resultsFromServer.data.children)
      })
  },[])

  const DATA = [
    {
      id: '1',
      title: 'First Item'
    },
    {
      id: '2',
      title: 'Second Item'
    },
    {
      id: '3',
      title: 'Third Item'
    },
  ];

  const renderItem = ({item}) => (
    <View style={{marginTop: 10,}}>
      <Text>{item.data.title}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Button title="Press" onPress={() => Alert.alert('Simple Button pressed')} color="red" />

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>
          <AntDesign name="rightcircle" size={24} color="black" />
        </Text>
        <Text>Press Here</Text> 
      </TouchableOpacity>

      <View style={{marginTop: 60}}>
      <Pressable style={styles.button} 
        onPressIn={() => console.log('pressing in')}
        onPressOut={() => console.log('pressing out')}
        onLongPress={() => console.log('long press')}
        hitSlop={20}
      >
        <Text>Pressable Here</Text>
      </Pressable>
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
        />
        <Text>{text}</Text>
      </View>

      <View>
        <FlatList
          style={{marginHorizontal: 20}}
          data={result}
          renderItem={renderItem}
          keyExtractor={item=> item.id}
        />
      </View>
      
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

  button: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 20
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 300,
    padding: 10,
  }
});
