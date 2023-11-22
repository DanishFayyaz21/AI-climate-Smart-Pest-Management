import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <LinearGradient colors={['#1e90ff', '#f0e68c']} style={styles.container}>
    
        <View style={styles.container}>
          <Text style={styles.title}>AI Climate Smart Pest Management</Text>

          <View style={styles.card1}>
            <Text style={styles.cardTitle}>MAP</Text>
          </View>

          <View style={styles.touchablesContainer}>
            <TouchableOpacity style={styles.touchable1} onPress={() => navigation.navigate('farmSection')}>
              <Text style={styles.touchableText}>My Farm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable1} onPress={() => navigation.navigate('userPanel')}>
              <Text style={styles.touchableText}>User Panel</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card2}>
            <Text style={styles.cardTitle}>Weather Conditions</Text>
          </View>

          <View style={styles.touchablesContainer}>
            <TouchableOpacity style={styles.touchable2} >
              <Text style={styles.touchableText2}>Saved Locations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable2} >
              <Text style={styles.touchableText2}>User Account</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.fullWidthTouchable} >
            <Text style={styles.fullWidthTouchableText}>Terms and Conditions</Text>
          </TouchableOpacity>

          <View style={styles.betaSection}>
            <Text style={styles.betaText}>BETA</Text>
            <View style={styles.line}></View>
          </View>
        </View>
    </LinearGradient>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff',
    marginHorizontal: 30,
  },
  card1: {
    backgroundColor: '#a9a9a9',
    marginTop: 20,
    height: 180,
    marginLeft: 20,
    width: 300,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  card2: {
    backgroundColor: '#a9a9a9',
    marginTop: 20,
    height: 150,
    marginLeft: 20,
    marginRight: 20,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  touchablesContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  touchable1: {
    backgroundColor: '#ff8c00',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  touchable2: {
    backgroundColor: '#ff8c00',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 20,
    marginHorizontal: 40,
    marginBottom: 5,
    marginRight: 30,
  },
  touchableText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  touchableText2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fullWidthTouchable: {
    backgroundColor: '#ff8c00',
    paddingVertical: 2,
    borderRadius: 10,
    // marginVertical: 640,
    // position: 'absolute',
    // left: 0,
    // right: 0,
    alignItems: 'center',
  },
  fullWidthTouchableText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10,
  },
  betaSection: {
    // position: 'absolute',
    // bottom: 10,
  },
  betaText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '100%',
    marginTop: 2,
  },
});

export default HomeScreen;
