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
  const onCreateNewExpense = () => NavigationService.navigate('CreateNewExpense');
 // const onJuniorCoachingSchedule = () => NavigationService.navigate('JuniorCoachingSchedule');
 
  
  const [gender, setGender] = React.useState();

  const genderList = [
    { label: "Shuttlecock", value: "Shuttlecock" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  
  const sheetRef = React.useRef(null);
  return (

 <ScrollView>

  
   <View style={styles.sidePadding}>
        
        <List.Item 
           titleStyle={{fontSize:17, fontWeight:'bold'}}
           descriptionStyle={{fontSize:14, fontWeight:'bold'}}
             title="Premier Club"
             description="Norwich, UK"
             left={props =>  <List.Icon {...props} icon="chevron-left" />}
        />
   
     </View> 
       
        
    </ScrollView>


   
  );
};

export default TrainingScheduleJunior;
