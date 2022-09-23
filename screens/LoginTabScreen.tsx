import { View, Text, StyleSheet } from 'react-native';

import { RootTabScreenProps } from '../types';

export default function LoginTabScreen({ navigation }: RootTabScreenProps<'LoginTab'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>That's Login Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
