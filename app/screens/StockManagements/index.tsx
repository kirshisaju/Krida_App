import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph, FAB } from 'react-native-paper';
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

const StockManagement: React.FC = () => {
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
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [isEnabled1, setIsEnabled1] = React.useState(false);
 

  const [gender, setGender] = React.useState();

  
  const sheetRef = React.useRef(null);
  return (

 <ScrollView>
    <View style={styles.sidePadding}>

    <View style={{marginTop:20}}>
        <ScrollView
          horizontal //scrolling left to right instead of top to bottom
          showsHorizontalScrollIndicator={false} //hides native scrollbar
          scrollEventThrottle={10} //how often we update the position of the indicator bar
          pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
        >
            <Card style={styles.shawd} >
              <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', }}>
              <Avatar.Icon style={[styles.shield]} size={34} icon="shield" />
                <Text style={{fontSize:16, fontWeight:'600',marginTop:5}}>Shuttles</Text>
                <Text style={{fontSize:12, color:"#000000",opacity:.5}}>38 in stock</Text>
              </View>
            </Card>
            <View>
              <Card style={styles.shawd} >
                <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', }}>
                <Avatar.Icon style={[styles.shield,styles.shieldpink]} size={34} icon="shield" />
                  <Text style={{fontSize:16, fontWeight:'600',marginTop:5}}>Shuttles</Text>
                  <Text style={{fontSize:12, color:"#000000",opacity:.5}}>38 in stock</Text>
                </View>
              </Card>
            </View>
            <View>
              <Card style={styles.shawd} >
                <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', }}>
                <Avatar.Icon style={[styles.shield,styles.shieldgreen]} size={34} icon="shield" />
                  <Text style={{fontSize:16, fontWeight:'600',marginTop:5}}>Shuttles</Text>
                  <Text style={{fontSize:12, color:"#000000",opacity:.5}}>38 in stock</Text>
                </View>
              </Card>
            </View>
    </ScrollView>
      </View>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10}}>
      <View style={{width:"20%", }}> 
     <Avatar.Icon style={[styles.shield]} size={34} icon="shield" />
      </View>
      <View style={{width: "60%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>6 Jan 2021</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Shuttles</Paragraph>
      </View>
      <View style={{width: "10%",paddingTop:20 }}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>+23</Text>
      </View>
      <View style={{width: "10%", }}>
      <List.Icon icon="chevron-right" />
      </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10}}>
      <View style={{width:"20%", }}> 
     <Avatar.Icon style={[styles.shield,styles.shieldpink]} size={34} icon="shield" />
      </View>
      <View style={{width: "60%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>6 Jan 2021</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Shuttles</Paragraph>
      </View>
      <View style={{width: "10%",paddingTop:20 }}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>+23</Text>
      </View>
      <View style={{width: "10%", }}>
      <List.Icon icon="chevron-right" />
      </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10}}>
      <View style={{width:"20%", }}> 
     <Avatar.Icon style={[styles.shield,styles.shieldgreen]} size={34} icon="shield" />
      </View>
      <View style={{width: "60%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>6 Jan 2021</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Shuttles</Paragraph>
      </View>
      <View style={{width: "10%",paddingTop:20 }}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>+23</Text>
      </View>
      <View style={{width: "10%", }}>
      <List.Icon icon="chevron-right" />
      </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10}}>
      <View style={{width:"20%", }}> 
     <Avatar.Icon style={[styles.shield,styles.shieldpink]} size={34} icon="shield" />
      </View>
      <View style={{width: "60%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>6 Jan 2021</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Shuttles</Paragraph>
      </View>
      <View style={{width: "10%",paddingTop:20 }}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>+23</Text>
      </View>
      <View style={{width: "10%", }}>
      <List.Icon icon="chevron-right" />
      </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10}}>
      <View style={{width:"20%", }}> 
     <Avatar.Icon style={[styles.shield]} size={34} icon="shield" />
      </View>
      <View style={{width: "60%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>6 Jan 2021</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Shuttles</Paragraph>
      </View>
      <View style={{width: "10%",paddingTop:20 }}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>+23</Text>
      </View>
      <View style={{width: "10%", }}>
      <List.Icon icon="chevron-right" />
      </View>
      </View>
<Grid style={{marginBottom:60}}>
  <Col>
<FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
  </Col>
  </Grid>
      </View> 
    </ScrollView>


   
  );
};

export default StockManagement;
