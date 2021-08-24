import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import DropDown from 'react-native-paper-dropdown';
//import SelectDropdown from 'react-native-select-dropdown'
import Swiper from 'react-native-swiper';
import { SceneMap, TabView } from 'react-native-tab-view';


interface IState {
  loginReducer: ILoginState;
}

const Colorsetup: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const [visible1, setVisible1] = React.useState(false);
  const showDialog1 = () => setVisible1(true);
  const hideDialog1= () => setVisible1(false);
  const [text, setText] = React.useState('');
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const showDialog2 = () => setVisible2(true);
  const hideDialog2= () => setVisible2(false);
  const [index, setIndex] = React.useState(0);

  const [gender, setGender] = React.useState();
  
  const FirstRoute = () => (
    <View>
    <Text>dfghgfd</Text>
    </View>
);

const SecondRoute = () => (
<Text>dfghgfd</Text> );



  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    
  });
  const [routes] = React.useState([
    { key: 'first', title: 'Pick a Color' },
    { key: 'second', title: 'Custom Color' },

  ]);

  
  return (
    <ScrollView>

<TabView
        swipeEnabled={false}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        tabStyle={{width:'auto'}}/>

   </ScrollView>   
   
  );
};

export default Colorsetup;
