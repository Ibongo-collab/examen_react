import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import MaillotScreens from './screens/MaillotScreens';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import MaillotDeatils from './screens/MaillotDeatils';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

DrawerNavigatorBuilder = () => {
  return( 
  <Drawer.Navigator 
  screenOptions={{
    headerStyle: {backgroundColor:'#000000'},
    headerTintColor: 'white',
    sceneContainerStyle: {backgroundColor: 'white' },
    drawerContentStyle: {backgroundColor: 'white'},
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#3f2f25'
}}>
    <Drawer.Screen 
      name='Ventes de maillots' 
      component={MaillotScreens}
      />
  </Drawer.Navigator>);
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='MealsCategories' screenOptions={{
              headerStyle: {backgroundColor:'#000000'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#fff' }
          }}>
            <Stack.Screen 
              name='Drawer' 
              component={DrawerNavigatorBuilder}
              options={{
                headerShown: false
              }}
              />
            <Stack.Screen name='Details maillot' component={MaillotDeatils} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
});
