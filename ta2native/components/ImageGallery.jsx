import { StyleSheet, View, Image, Text, FlatList } from 'react-native';

export const images = [
  { id: '1', source: require('@/assets/images/img1.jpg'), description: 'Una visión terrorífica' },
  { id: '2', source: require('@/assets/images/img2.jpg'), description: 'Aguanta la mirada...' },
  { id: '3', source: require('@/assets/images/img3.jpg'), description: '¿Oíste eso?' },
];

export default function ImageGallery() {
  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item.source} style={styles.image} />
          <Text style={styles.description}>{item.description}</Text>
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#2b0018',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ff4d4d',
    marginRight: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderColor: '#ff0000',
    borderWidth: 2,
  },
  description: {
    color: '#ff4d4d',
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});
