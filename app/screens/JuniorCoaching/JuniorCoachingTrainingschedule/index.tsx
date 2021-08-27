import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View, } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph, FAB, Portal,Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import DropDown from 'react-native-paper-dropdown';
//import SelectDropdown from 'react-native-select-dropdown'
import Swiper from 'react-native-swiper';
import Colorsetup from '../../Colorsetup';
import Logosetup from '../../Logosetup';
import Icon from 'react-native-paper/lib/typescript/components/Icon';
import BottomSheet from 'reanimated-bottom-sheet';
import MemberShipDrawer from 'app/screens/membershipdrawer';
import AddMemberDrawer from 'app/screens/Addmemberdrawer';
import { blue600 } from 'react-native-paper/lib/typescript/styles/colors';




interface IState {
  loginReducer: ILoginState;
}

const JuniorCoachingTrainingSchedule: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();

  const sheetRef = React.useRef(null);

  const renderContent = () => ( 
    <View
    style={{
      backgroundColor: 'white',
      padding: 16,
      height: 1000,
      width:"100%",
    }}
  >
<AddMemberDrawer/>
  </View>
  );
  return (
<ScrollView>
<Button icon="camera" mode="contained" onPress={() => sheetRef.current.snapTo(0)}>
New Group
  </Button>
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


export default JuniorCoachingTrainingSchedule;
