import React from 'react';
import { View ,useWindowDimensions, ScrollView} from 'react-native';
import { Avatar, Button, Card, Text, Title, Dialog, Provider, Portal, Paragraph, Switch, DataTable, List, Searchbar, FAB, TextInput, Chip } from 'react-native-paper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';

/* Components Import */
import Schedule from './Schedule';
import News from './News';
import Myclubs from './Myclubs';

import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet } from 'react-native';

//import { Dropdown } from 'react-native-material-dropdown';
import Slider from '@react-native-community/slider';
//import MapView from 'react-native-maps';
import NavigationService from 'app/navigation/NavigationService';
import Events from './Events';
import auth from '@react-native-firebase/auth';


const FirstRoute = () => (
                          <ScrollView>
                            <Schedule />
                            <News />
                          </ScrollView>
                        );


{/* Clubs */}
const SecondRoute = () => <Myclubs />;

{/* Events */}
const ThirdRoute = () => (
  <ScrollView>
  <Events />
  </ScrollView>
  
);
const FourthRoute = () => (<>
 
</>
);
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth : FourthRoute,
});

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => { 
    dispatch(loginActions.logOut()); 
    auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    }); 
  };
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);


 
  const containerStyle = {backgroundColor: 'white', padding: 10};
  const [searchQuery, setSearchQuery] = React.useState('');
  const onWallet = () => NavigationService.navigate('MyWallet');
  const onNotification = () => NavigationService.navigate('Notification');
  const onChat = () => NavigationService.navigate('Chat');
  const onTraining = () => NavigationService.navigate('TrainingSchedule');

  const [routes] = React.useState([
    { key: 'first', title: 'Home' },
    { key: 'second', title: 'Clubs' },
    { key: 'third', title: 'Events' },
    { key: 'fourth', title: 'Subscribe' },
  ]);

  const renderLabel = ({route, focused}) => 
  {
    if (focused) { return <Text style={[{color: '#000537'},styles.topbarTitle]}>{route.title}</Text>; } return <Text style={[{color: '#aaa'},styles.topbarTitle]}>{route.title}</Text>;
  }

  return (
    <>
    <TabView
        swipeEnabled={false}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        tabStyle={{width:'auto'}}
         renderTabBar={ (props:any) => (
          <TabBar
            renderLabel={renderLabel}
            {...props}
            indicatorStyle={{ backgroundColor: '#E75333', height: 2 }}
            tabStyle={{ width: 108 }}
            scrollEnabled={true}
            style={{ backgroundColor: 'white' }}
          />
        )}
        />
        {/* <Button icon="login" mode="outlined" onPress={onTraining}>
          Training Schedule
        </Button> */}
     </>
  );
};

export default Home;
