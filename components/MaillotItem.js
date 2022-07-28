import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform
} from 'react-native'

const MaillotItems = ({desc, marque, prix}) => {

  return (
      <View style={styles.maillotItem}>
              <View style={styles.innerContainer}>
                  <Text style={styles.title}>{desc} à {prix}</Text>
                  <Image source={{uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/acd37e00-6364-4a07-bbfd-ab0a881e1624/quatrieme-maillot-de-football-inter-milan-2020-21-stadium-pour-gvhvGM.png'}} style={styles.image} />
                  <Text style={styles.title}>{marque}</Text>
              </View>
      </View>
  );
}

export default MaillotItems;

const styles = StyleSheet.create({
  maillotItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});