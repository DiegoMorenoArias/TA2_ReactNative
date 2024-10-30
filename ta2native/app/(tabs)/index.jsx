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
    backgroundColor: '#0d0007',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#ff0000',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#b32e2e',
    marginTop: 10,
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 20,
    borderRadius: 125,
    borderColor: '#ff0000',
    borderWidth: 3,
  },
});
