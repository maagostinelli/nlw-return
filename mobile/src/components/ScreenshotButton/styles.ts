import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
      width: 40,
      height: 40,
      borderRadius:4,
      backgroundColor: theme.colors.surface_secondary,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
  },
  removeIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0,
  },
  image: {
    width: 40,
    height: 40,
  },
});