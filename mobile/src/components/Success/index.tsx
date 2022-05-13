import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import { Copyright } from '../Copyright';

import successIcon from '../../assets/success.png';

import { styles } from './styles';

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={successIcon}
        style={styles.image}
      />
      <Text style={styles.title}>Agradecemos o feedback</Text>
      <TouchableOpacity 
      style={styles.button}
      onPress={onSendAnotherFeedback}
      >
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}