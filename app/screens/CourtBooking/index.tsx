import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph, Searchbar, FAB } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import DropDown from 'react-native-paper-dropdown';
//import SelectDropdown from 'react-native-select-dropdown'
import Swiper from 'react-native-swiper';
import Colorsetup from '../Colorsetup';
import Logosetup from '../Logosetup';
import Icon from 'react-native-paper/lib/typescript/components/Icon';
import BottomSheet from 'reanimated-bottom-sheet';
import MemberShipDrawer from 'app/screens/membershipdrawer';
import AddMemberDrawer from 'app/screens/Addmemberdrawer';
import { blue600 } from 'react-native-paper/lib/typescript/styles/colors';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';




interface IState {
  loginReducer: ILoginState;
}

const CourtBooking: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [index, setIndex] = React.useState(0);
  const [isEnabled1, setIsEnabled1] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onNewCourtBooking = () => NavigationService.navigate('NewCourtBooking');
  
 
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  
  const [gender, setGender] = React.useState();
  const FirstRoute = () => (
    <ScrollView>

    </ScrollView>
  );


{/* Clubs */}
const SecondRoute = () => 
    <ScrollView>

    </ScrollView>;

const [routes] = React.useState([
  { key: 'first', title: 'Upcoming' },
  { key: 'second', title: 'Past' },
 
]);
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,

});
const renderLabel = ({route, focused}) => 
{
  if (focused) { return <Text style={[{color: '#000537'},styles.topbarTitle]}>{route.title}</Text>; } return <Text style={[{color: '#aaa'},styles.topbarTitle]}>{route.title}</Text>;
}

  

  return (


<View style={{backgroundColor:'#fff'}}>
<ScrollView>
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
            tabStyle={{ width: 180 }}
            scrollEnabled={true}
            style={{ backgroundColor: 'white' }}
          />
        )}
        />
        <View style={{paddingHorizontal:15}}>
        <Searchbar style={{marginTop:20,borderWidth:0,borderColor:'#fff',}}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
        </View>
  
        <View style={{paddingHorizontal:15}}>
     <Grid style={styles.borderClubs}>
     <Col size={15} style={styles.bgnumberblue}>
      <Text style={{color:'#fff',fontSize:10,textTransform:'uppercase',textAlign:'center',marginTop:12}}>May</Text>
      <Paragraph style={{color:'#fff',fontSize:19,textAlign:'center',marginTop:10}}>6</Paragraph>
      </Col>
      <Col size={70}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>7:00 - 9:00 AM</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Sportspark University of East, Nor...</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:10,opacity:.5}}>Courts 1, 5</Paragraph>
      </Col>
      <Col size={15}>
      <List.Icon icon="dots-vertical" />
     </Col>
</Grid> 
<Grid style={styles.borderClubs}>
     <Col size={15} style={styles.bgnumberblue}>
      <Text style={{color:'#fff',fontSize:10,textTransform:'uppercase',textAlign:'center',marginTop:12}}>May</Text>
      <Paragraph style={{color:'#fff',fontSize:19,textAlign:'center',marginTop:10}}>6</Paragraph>
      </Col>
      <Col size={70}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>7:00 - 9:00 AM</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Sportspark University of East, Nor...</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:10,opacity:.5}}>Courts 1, 5</Paragraph>
      </Col>
      <Col size={15}>
      <List.Icon icon="dots-vertical" />
     </Col>
</Grid> 
<Grid style={styles.borderClubs}>
     <Col size={15} style={styles.bgnumberblue}>
      <Text style={{color:'#fff',fontSize:10,textTransform:'uppercase',textAlign:'center',marginTop:12}}>May</Text>
      <Paragraph style={{color:'#fff',fontSize:19,textAlign:'center',marginTop:10}}>6</Paragraph>
      </Col>
      <Col size={70}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>7:00 - 9:00 AM</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Sportspark University of East, Nor...</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:10,opacity:.5}}>Courts 1, 5</Paragraph>
      </Col>
      <Col size={15}>
      <List.Icon icon="dots-vertical" />
     </Col>
</Grid> 
</View>
</ScrollView>
<FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={onNewCourtBooking}
  />
    </View>

   
  );
};

export default CourtBooking;
