import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import api from '../../services/connection';
import styles from './styles';

interface User {
  login: String;
  id: Number;
  avatar_url: String;
  url: String;
  html_url: String;
}

export default function Home() {
  const [user, setUser] = useState<User>();

  var UserName = 'lucasmontano';

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/users/${UserName}`);

      setUser(response.data);
    }
    loadUser();
  }, []);

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
          <View style={styles.repoView}>
            <View style={styles.AvatarIMG}>
              <Image
                source={{ uri: `${user?.avatar_url}` }}
                style={{ width: '100%', height: '100%', borderRadius: 50 }}
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
              <View style={{ width: '90%', height: '90%' }}>
                <Text style={{ fontSize: 17 }}>{user?.login}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}