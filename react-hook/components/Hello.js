import React, { useState, useCallback } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from '../assets/styles';

export default function HelloWorld(props) {
  const [age, setAge] = useState(0);

  const handleInputChange = useCallback((text) => {
    const parsedAge = parseInt(text, 10);
    if (!isNaN(parsedAge)) {
      setAge(parsedAge);
    } else {
      setAge(0);
    }
  }, []);

  const increment = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, []);

  const decrement = useCallback(() => {
    setAge((prevAge) => (prevAge > 0 ? prevAge - 1 : 0));
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your age..."
        value={age.toString()}
        onChangeText={handleInputChange}
        keyboardType="numeric"
      />
      <Text style={styles.teks}>Hello {props.name}</Text>
      <Text style={styles.teks}>Your age is {age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment Age" onPress={increment} />
        <Button title="Decrement Age" onPress={decrement} />
      </View>
    </View>
  );
}
