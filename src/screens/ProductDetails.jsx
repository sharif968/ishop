import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

const ProductDetails = ({route, navigation}) => {
  const {image, title, price, description} = route.params;

  const headerTitle = title.length > 16 ? `${title.slice(0, 16)}...` : title;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: headerTitle,
    });
  }, [navigation, headerTitle]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
        <View style={styles.descriptionTitleContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // overlap the image
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#DB312D',
    marginBottom: 16,
  },
  descriptionTitleContainer: {
    backgroundColor: '#DB312D',
    padding: 4,
    borderRadius: 5,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#555',
  },
});
