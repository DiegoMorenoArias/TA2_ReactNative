import { StyleSheet, Image, View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import ImageGallery, { images } from '@/components/ImageGallery'; // Asegúrate de que la ruta sea correcta

export default function ExploreScreen() {
  // Estado para la imagen mostrada
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para cambiar la imagen
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
    backgroundColor: '#1b0012', // Fondo oscuro
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20, // Agrega algo de espacio en el contenedor
  },
  title: {
    fontSize: 24,
    color: '#ff4d4d', // Color rojo sangriento
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ff4d4d', // Borde sangriento
    marginBottom: 20,
  },
  description: {
    marginTop: 10,
    color: '#b32e2e', // Texto de descripción en tonos oscuros
    fontSize: 16,
    fontStyle: 'italic',
  },
});
