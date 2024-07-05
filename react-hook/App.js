import * as React from 'react';
import { View } from 'react-native';
import HelloWorld from './components/Hello';
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View>
      <HelloWorld name="Diana" />
      <HelloWorld name="Shinta" />
      <AssetExample />
    </View>
  );
}
