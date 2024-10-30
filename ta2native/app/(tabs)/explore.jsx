import { StyleSheet, Image, View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import ImageGallery, { images } from '@/components/ImageGallery';

export default function ExploreScreen() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explora el horror...</Text>
      <Image source={images[currentImageIndex].source} style={styles.image} />
      <Text style={styles.description}>Un lugar oscuro y lleno de misterio...</Text>
      <Button title="Cambiar Imagen" onPress={changeImage} color="#ff4d4d" />
      <ImageGallery></ImageGallery>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b0012',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#ff4d4d',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ff4d4d',
    marginBottom: 20,
  },
  description: {
    marginTop: 10,
    color: '#b32e2e',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
