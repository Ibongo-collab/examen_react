import { View, StyleSheet, FlatList } from "react-native";
import MaillotItems from "../components/MaillotItem";
import { MAILLOTS } from "../data/json";

const MaillotDeatils = ({route}) => {
    
    const refData = route.params.ref
    
    const checkMaillot = MAILLOTS.filter((maillotItem)=>{
        return maillotItem.reference.indexOf(refData) >=0
    })

    const renderMaillotItem = (itemData) => {
        const maillot = itemData.item
        const maillotItemprops = {
            desc: maillot.description,
            marque: maillot.marque,
            prix: maillot.prix,
        };
        console.log(maillotItemprops);
        return  <MaillotItems {...maillotItemprops} /> ;
    }

    return (
        <View style={style.container}>
            <FlatList
                data={checkMaillot}
                keyExtractor = {(item)=>item.ref}
                renderItem={renderMaillotItem}
            />
        </View>
    );
}

export default MaillotDeatils;

const style = StyleSheet.create({
    container: {
        flex: 1 ,
        padding : 16
    }
})