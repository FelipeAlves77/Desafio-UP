import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Image style={styles.imageIcon} source={require('./assets/ICON2.jpg')} />
      </TouchableOpacity>
      <Text style={styles.title}>Agora é hora de fazer um vídeo do seu imóvel.</Text>
      <Text style={styles.subtitle}>Você pode abrir a câmera ou subir a foto da sua galeria.</Text>
      <TouchableOpacity style={styles.cameraButton}>
        <Text style={styles.buttonText}>Abrir a câmera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.galleryButton}>
        <Text style={styles.buttonText2}>Abrir galeria</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontFamily: 'jura',
    color: '#10002B',
    textAlign: 'left',
    marginBottom: 20,
    margin: 19,
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'jura',
    margin: 19,
    textAlign: 'left',
    marginBottom: 380,
  },
  cameraButton: {
    backgroundColor: '#7B2CBF',
    padding: 15,
    borderRadius: 5,
    width: 350,
    marginBottom: 10,
  },
  galleryButton: {
    backgroundColor: '#fff',
    borderColor: '#7B2CBF',
    borderWidth: 2,
    padding: 15,
    borderRadius: 5,
    width: 350,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'jura',
    textAlign: 'center',
    color: '#fff',
  },
  buttonText2: {
    fontSize: 16,
    fontFamily: 'jura',
    textAlign: 'center',
    color: '#7B2CBF',
  },
  imageIcon: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: 300,
  },
});

export default CameraScreen;
