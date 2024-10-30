// index.jsx

import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Horror</Text>
      <Image source={require('@/assets/images/skull.png')} style={styles.image} />
      <Text style={styles.subtitle}>Prepárate para lo inesperado...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0007', // Fondo oscuro, casi negro
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#ff0000', // Rojo intenso para el título
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#b32e2e', // Rojo oscuro para el subtítulo
    marginTop: 10,
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 20,
    borderRadius: 125,
    borderColor: '#ff0000', // Borde rojo
    borderWidth: 3,
  },
});
