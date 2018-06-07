import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/sharePlace';
import FindPlaceScreen from './src/screens/FindPlace/findPlace';
import PlaceDetailsScreen from './src/screens/PlaceDetails/PlaceDetail';
//Registers Screens

import configureStore from './src/store/configureStore';
const store = configureStore();

Navigation.registerComponent("prehomer.AuthScreen",()=> AuthScreen,store,Provider);
Navigation.registerComponent("prehomer.SharePlaceScreen",()=> SharePlaceScreen,store,Provider);
Navigation.registerComponent("prehomer.FindPlaceScreen",()=> FindPlaceScreen,store,Provider);
Navigation.registerComponent("prehomer.PlaceDetailsScreen",()=> PlaceDetailsScreen);

//start a app
Navigation.startSingleScreenApp({
  screen: {
    screen:"prehomer.AuthScreen", 
    title: "Login "
  }
})
