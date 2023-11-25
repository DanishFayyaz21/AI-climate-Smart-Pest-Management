import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { WebView } from 'react-native-webview';
import Mapbox from '@rnmapbox/maps';

const HomeScreen = () => {
  const navigation = useNavigation();
  Mapbox.setAccessToken('pk.eyJ1IjoibWhhc3NhYW4xMjI2IiwiYSI6ImNsNDl0cjZ0djA5aGYzaHA3NDQzZXA4dWMifQ.gsyzWQ8n-weuD2Az4z0G_w');
  return (

    <LinearGradient colors={['#1e90ff', '#f0e68c']} style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>AI Climate Smart Pest Management</Text>

          <View style={styles.card1}>

            {/* <Image
              source={require('../asssets/map.png')}
              style={styles.mapImage}
            /> */}
            {/* <Mapbox.MapView style={styles.map} /> */}
            <View style={{ flex: 1 }}>
              <WebView
                // source={{ uri: 'https://www.google.com/maps/@31.5891719,74.3128884,14.84z?entry=ttu' }}

                source={{
                  html: `
                    <html>
                      <body>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.739408060762!2d74.31722097539873!3d31.58619324388738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b66ed955555%3A0xc7e180a52478c762!2sUK%20Center!5e0!3m2!1sen!2s!4v1700835419823!5m2!1sen!2s" width="1000" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </body>
                    </html>
                  `,
                }}
                // style={{ flex: 1 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                onError={(error) => console.error('WebView Error: ', error)}
              />
            </View>
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
            <TouchableOpacity style={styles.touchable1} >
              <Text style={styles.touchableText2}>Saved Locations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable1} >
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
      </ScrollView>
    </LinearGradient>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // paddingHorizontal: 10,

  },
  map: {
    flex: 1
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff',
    textAlign: "center"
    // marginHorizontal: 30,
  },
  card1: {
    backgroundColor: '#a9a9a9',
    marginTop: 20,
    height: 180,
    // marginLeft: 20,
    width: "90%",
    // marginRight: 20,
    // alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  card2: {
    backgroundColor: '#a9a9a9',
    marginTop: 20,
    height: 150,
    // marginLeft: 20,
    // marginRight: 20,
    width: "90%",
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
    // marginHorizontal: 40,
    marginBottom: 5,
    marginRight: 30,
  },
  touchableText: {
    color: '#464647',
    fontWeight: 'bold',
    fontSize: 20,
  },
  touchableText2: {
    color: '#464647',
    fontWeight: 'bold',
    fontSize: 15,
  },
  fullWidthTouchable: {
    backgroundColor: '#ff8c00',
    paddingHorizontal: 40,
    paddingVertical: 5,
    marginVertical: 10,
    // marginHorizontal:16,
    fontSize: 12,
    borderRadius: 10,
    // marginVertical: 640,
    // position: 'absolute',
    // left: 0,
    // right: 0,
    alignItems: 'center',
  },
  fullWidthTouchableText: {
    color: '#464647',
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 10,
  },
  betaSection: {
    // position: 'absolute',
    // bottom: 10,
  },
  betaText: {
    color: '#464647',
    fontWeight: 'bold',
    fontSize: 28,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '100%',
    marginTop: 2,
  },
  mapContainer: {
    height: 300,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  // map: {
  //   ...StyleSheet.absoluteFillObject,
  // },
  mapImage: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    resizeMode: 'cover',
  },
});

export default HomeScreen;
