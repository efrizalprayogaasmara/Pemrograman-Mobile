import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../assets/styles';

function Example() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    // React Native doesn't support document.title, so you can omit this
    // document.title = `Anda Sudah Meng Click ${count} kali`;
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.teks}>Anda Sudah Meng Click {count} kali</Text>
            <Button title="Click Aku" onPress={() => setCount(count + 1)}/>
      <Button title="Reset" onPress={reset} />
    </View>
  );
}

export default Example;
