import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet } from 'react-native';


const MyComponent = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.text}>Hello World</Text>
        <Image
        style={styles.image}
        source={require('./image/image1.jpeg')}
      /> 
        <TextInput
          style={styles.textInput}
          placeholder="Masukan username anda"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  viewContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default MyComponent;