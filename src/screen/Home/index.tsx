import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { RectButton } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';
import { Text, View, TextInput, Image } from 'react-native';
import styles from './styles';

import user from '../../services';

export default function Home({}) {
  const navigation = useNavigation();

  function OpenPerfil() {
    Linking.openURL(`${user?.html_url}`);
  }

  function Navigate() {
    navigation.navigate('Perfil');
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.Banner}>
          <View>
            <Text style={styles.Title}>GitHub</Text>
          </View>
          <View style={styles.Icon}>
            <FontAwesome
              name="github-square"
              size={24}
              color="black"
              style={styles.Icon}
            />
          </View>
        </View>
        <View style={styles.Header}>
          <TextInput placeholder="  Search here" style={styles.TextInput} />
        </View>
        <View style={styles.Main}>
          <RectButton onPress={Navigate} style={styles.repoView}>
            <View style={styles.AvatarIMG}>
              <Image
                source={{ uri: `${user?.avatar_url}` }}
                style={styles.Img}
              />
            </View>
            <View
              style={{
                width: '65%',
                height: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <View
                style={{
                  width: '90%',
                  height: '80%',
                  justifyContent: 'space-between'
                }}
              >
                <Text style={{ fontSize: 17 }}>{user?.login}</Text>
                <Text onPress={OpenPerfil}>Access repository</Text>
              </View>
            </View>
          </RectButton>
        </View>
      </View>
    </>
  );
}
