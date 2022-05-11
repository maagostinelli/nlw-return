import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './src/theme';

export default function App() {
  return (
    <View style={{
      flex: 1,
      //native tem flex por padrão
      backgroundColor: theme.colors.background
    }}>
      <Text>teste</Text>
      <StatusBar 
      style='light' 
      backgroundColor='transparent'
      translucent
      />
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
});
