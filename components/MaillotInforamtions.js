import { Pressable, View, Text, StyleSheet, Image, Platform} from "react-native";

const MaillotInforamtions = ({desc, prix, onPress}) => {
    
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{color: '#fff'}}
                style={({pressed})=>[
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: '#fff'}]}>
                    <Text style={{color: "black", marginBottom : 10}}>{desc} à {prix}</Text>
                    <Image source={{uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/acd37e00-6364-4a07-bbfd-ab0a881e1624/quatrieme-maillot-de-football-inter-milan-2020-21-stadium-pour-gvhvGM.png'}} style={styles.image} />
                </View>
            </Pressable>
        </View>
    );
}

export default MaillotInforamtions;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
      },
      image: {
        width: 90,
        height: 90,
      },
      button: {
        flex: 1,
      },
      buttonPressed: {
        opacity: 0.5,
      },
      innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontWeight: 'bold',
        fontSize: 18,
      },
})