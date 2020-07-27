import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Perfil: React.FC = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Main}>
        <Text>Nikolas</Text>
      </View>
    </View>
  );
};

export default Perfil;
