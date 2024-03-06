import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
