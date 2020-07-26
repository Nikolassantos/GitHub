import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import api from './src/services/conection';
import styles from './styles';

interface User {
  login: String;
  id: Number;
  avatar_url: String;
  url: String;
  html_url: String;
}

export default function App() {
  const [user, setUser] = useState<User>();

  var UserName = 'Nikolassantos';

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/users/${UserName}`);

      setUser(response.data);
    }
    loadUser();
  }, []);

  return (
    <>
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
          <StatusBar style="auto" />
        </View>
        <View style={styles.Main}>
          <View style={styles.repoView}>
            <View style={styles.AvatarIMG}>
              <Image
                source={{ uri: `${user?.avatar_url}` }}
                style={{ width: '100%', height: '100%', borderRadius: 50 }}
              />
            </View>
            <View>
              <Text>asd</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
