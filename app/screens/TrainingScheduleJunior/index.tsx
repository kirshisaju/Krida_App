import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph, FAB, Portal,ProgressBar,Colors } from 'react-native-paper';
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
import { DataTable } from 'react-native-paper';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import JuniorCoachingNewGroup from '../JuniorCoachingNewGroup';



interface IState {
  loginReducer: ILoginState;
}

const TrainingScheduleJunior: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onNewClub = () => NavigationService.navigate('NewClub');
  const onClubdetail = () => NavigationService.navigate('Clubdetail');
  const onClubsetup = () => NavigationService.navigate('Clubsetup');
  const onSearchClub = () => NavigationService.navigate('SearchClub');
  const onCourtBooking = () => NavigationService.navigate('CourtBooking');
 
  const onStockManagement = () => NavigationService.navigate('StockManagement');
  const onManageClub = () => NavigationService.navigate('ManageClub');
  const onMyClubLanding = () => NavigationService.navigate('MyClubLanding');
  const onNewExpenses = () => NavigationService.navigate('NewExpenses');
  //const onManageClub = () => NavigationService.navigate('CreateNewExpense');
 // const onJuniorCoachingSchedule = () => NavigationService.navigate('JuniorCoachingSchedule');
 
 const FirstRoute = () => (
  <ScrollView>

  </ScrollView>
  );
const SecondRoute = () => (
  <ScrollView>

  </ScrollView>
);
const ThirdRoute = () => (
  <ScrollView>

  </ScrollView>
);
const FourthRoute = () => (
  <ScrollView>

  </ScrollView>
);
const renderContent = () => ( 
  <View
  style={{
    backgroundColor: 'white',
    padding: 16,
    height: 1000,
    width:"100%",
  }}
>
<JuniorCoachingNewGroup/>
</View>
);
const sheetRef = React.useRef(null);
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth : FourthRoute,
});
const [index, setIndex] = React.useState(0);
const [gender, setGender] = React.useState();
const [routes] = React.useState([
  { key: 'first', title: 'Group 1'},
  { key: 'second', title: 'Group 2'},
  { key: 'third', title: 'Group 3'},
  { key: 'fourth', title: 'Group 4'},
]);
const renderLabel = ({route, focused}) => 
{
  if (focused) { return <Text style={[{color: '#000537'},styles.topbarTitle]}>{route.title}</Text>; } return <Text style={[{color: '#000'},styles.topbarTitle]}>{route.title}</Text>;
}
  return (

 <ScrollView> 

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
        style={{ backgroundColor: 'white' }}/>
        )}/>
        </>
      <View style={{paddingHorizontal:15,marginTop:10}}>
        <View style={{flex: 1, flexDirection: 'row',marginTop:20}}>
          <View style={{width: '85%', }}>
            <Text style={{color:'#000537',fontSize:14,fontWeight:'700',margin:0,paddingTop:5}}>Schedule</Text>
            <Paragraph style={{fontSize:14,margin:0}}>Wednesdays, 06:00PM - 07:00PM</Paragraph>
          </View>
          <View style={{width: '15%', }}>
          <Avatar.Icon size={40} icon="pencil" style={{color:"#fff",backgroundColor:"#E75333"}} />
          </View>
        </View>
        <Text style={{fontSize:14, fontWeight:'bold',marginTop:10}}>Members</Text>
        <View style={{flex: 1, flexDirection: 'row',marginTop:15}}>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath2.png')} />
            <Text style={{paddingLeft:10,fontSize:10,color:"#000537",paddingTop:10}}>Ashoka</Text>
          </View>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
            <Text style={{fontSize:10,color:"#000537",paddingTop:10}}>Carasynthia</Text>
          </View>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath3.png')} />
            <Text style={{paddingLeft:15,fontSize:10,color:"#000537",paddingTop:10}}>Moff</Text>
          </View>
          <View style={{width:"20%",}}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath4.png')} />
            <Text style={{paddingLeft:10,fontSize:10,color:"#000537",paddingTop:10}}>Ashoka</Text>
          </View>
        </View>
        <Text style={{fontSize:14, fontWeight:'bold',marginTop:15,marginBottom:15}}>Calendar View</Text>
        <Text style={{fontSize:14, fontWeight:'bold',marginTop:10}}>Assign coaches</Text>
        <View style={{flex: 1, flexDirection: 'row',marginTop:15,marginBottom:15}}>
          <View style={{width:"50%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath2.png')} />
            <Text style={{paddingLeft:10,fontSize:10,color:"#000537",paddingTop:10}}>Horold</Text>
          </View>
         
        </View>
        <View style={{width:'100%',marginBottom:200,}}>
            <FAB style={styles.fab}  small icon="plus"   onPress={() => sheetRef.current.snapTo(0)} />
            <Text style={{fontSize:12,color:"#000537",paddingTop:10,position:'absolute',right:10,top:50,marginBottom:10}}>New Group</Text>
          </View> 
      </View> 
   
      <BottomSheet
              ref={sheetRef}
              snapPoints={[450, 300, 0]}
              borderRadius={10}
              initialSnap={2}
              renderContent={renderContent}
              
  
              
            />
  </ScrollView>


   
  );
};

export default TrainingScheduleJunior;
