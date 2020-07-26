import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight + 20,
    width: '100%'
  },
  TextInput: {
    backgroundColor: '#E5E5E5',
    width: '90%',
    height: 50,
    borderRadius: 10,
    marginTop: 10
  },
  Header: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  Title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  Icon: {
    marginLeft: 5,
    fontSize: 30
  },
  Banner: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Main: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%'
  },
  repoView: {
    flexDirection: 'row',
    width: '90%',
    height: '15%',
    alignItems: 'center'
  },
  AvatarIMG: {
    width: '25%',
    height: '80%',
    marginLeft: '3%'
  },
  Img: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  }
});

export default styles;
