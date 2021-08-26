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
import Colorsetup from '../Colorsetup';
import Logosetup from '../Logosetup';
import Icon from 'react-native-paper/lib/typescript/components/Icon';
import BottomSheet from 'reanimated-bottom-sheet';
import MemberShipDrawer from 'app/screens/membershipdrawer';
import AddMemberDrawer from 'app/screens/Addmemberdrawer';
import { blue600 } from 'react-native-paper/lib/typescript/styles/colors';




interface IState {
  loginReducer: ILoginState;
}

const NewExpenses: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog= () => setVisible(false);
  const [text, setText] = React.useState('');
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const showDialog2 = () => setVisible2(true);
  const hideDialog2= () => setVisible2(false);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [isEnabled1, setIsEnabled1] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  const [gender, setGender] = React.useState();

  
  const sheetRef = React.useRef(null);
  return (
<ScrollView>
    <View style={styles.sidePadding}>
      <View style={{marginTop:10}}>
         <View style={{paddingHorizontal:15}}>
            <Searchbar style={{marginTop:20,elevation: 0, borderBottomColor:'#ddd', borderBottomWidth:2,width:"100%"}}
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
        </View>   
        <List.Item style={{borderBottomColor:'#ccc',borderBottomWidth:1,marginTop:10}}
          titleStyle={{fontSize:14,fontWeight:"700",color:'#000537'}}
          descriptionStyle={{fontSize:12,color:'#000537'}}
          title="Ahsoka Tano"
          description="@caras"
          left={props => <Avatar.Image size={45} source={require('../../assets/NoPath1.png')} /> }
          right={props => <List.Icon {...props} icon="check-circle"  />}
        />
        <List.Item style={{borderBottomColor:'#ccc',borderBottomWidth:1,marginTop:10}}
          titleStyle={{fontSize:14,fontWeight:"700",color:'#000537'}}
          descriptionStyle={{fontSize:12,color:'#000537'}}
          title="Ahsoka Tano"
          description="@caras"
          left={props => <Avatar.Image size={45} source={require('../../assets/NoPath1.png')} /> }
          right={props => <List.Icon {...props} icon="check-circle"  />}
        />
        <List.Item style={{borderBottomColor:'#ccc',borderBottomWidth:1,marginTop:10}}
          titleStyle={{fontSize:14,fontWeight:"700",color:'#000537'}}
          descriptionStyle={{fontSize:12,color:'#000537'}}
          title="Ahsoka Tano"
          description="@caras"
          left={props => <Avatar.Image size={45} source={require('../../assets/NoPath1.png')} /> }
          right={props => <List.Icon {...props} icon="check-circle"  />}
        />
        <List.Item style={{borderBottomColor:'#ccc',borderBottomWidth:1,marginTop:10}}
          titleStyle={{fontSize:14,fontWeight:"700",color:'#000537'}}
          descriptionStyle={{fontSize:12,color:'#000537'}}
          title="Ahsoka Tano"
          description="@caras"
          left={props => <Avatar.Image size={45} source={require('../../assets/NoPath1.png')} /> }
          right={props => <List.Icon {...props} icon="check-circle"  />}
        />
        <List.Item style={{borderBottomColor:'#ccc',borderBottomWidth:1,marginTop:10}}
          titleStyle={{fontSize:14,fontWeight:"700",color:'#000537'}}
          descriptionStyle={{fontSize:12,color:'#000537'}}
          title="Ahsoka Tano"
          description="@caras"
          left={props => <Avatar.Image size={45} source={require('../../assets/NoPath1.png')} /> }
          right={props => <List.Icon {...props} icon="check-circle" style={{color:'#ccc'}} />}
        />
        <List.Item style={{borderBottomColor:'#ccc',borderBottomWidth:1,marginTop:10}}
          left={props => <Text style={{paddingTop:8,fontSize:12,color:'#000537'}}>3 Members Selected</Text> }
          right={props => <Button style={styles.bgdone}>Done</Button>}
        />
    </View>
    </View>
    </ScrollView>
  );
};

export default NewExpenses;
