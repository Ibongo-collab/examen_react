import { FlatList } from 'react-native'
import MaillotInforamtions from '../components/MaillotInforamtions';
import { MAILLOTS } from '../data/json';



const MaillotScreens = ({navigation}) =>{

    const renderCategoryItem = (itemData) => {
    
        const pressHandler = () => {
             navigation.navigate('Details maillot', {
                 ref: itemData.item.reference,
             })
        }
        
        return (
            <MaillotInforamtions 
                desc={itemData.item.description} 
                prix={itemData.item.prix} 
                onPress={pressHandler}
                /> );
    }

    return (
        <FlatList
            data={MAILLOTS}
            keyExtractor = {(item) => item.ref}
            numColumns={1}
            renderItem={renderCategoryItem}
        />
    );

}

export default MaillotScreens;