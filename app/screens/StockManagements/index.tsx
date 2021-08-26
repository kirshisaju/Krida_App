import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph, FAB, Portal } from 'react-native-paper';
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
    onPress={showDialog}
  />
  </Col>
  </Grid>
      </View> 
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
           <List.Item
                titleStyle={{fontWeight:"700",fontSize:16}}
                descriptionStyle={{fontWeight:"700",fontSize:14}}
                title="Stock Update"
                description="Update #65"
                left={props => <List.Icon {...props} icon="close"  />}
              />
              <View style={{paddingHorizontal:15}}>
              <DropDown style = {styles.inputsfull}
          label={"Category"}
          mode={"outlined"}
          value={gender}
          setValue={setGender}
          list={genderList}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          inputProps={{
            right: <TextInput.Icon name={"menu-down"} />,
          }}
        />
        <List.Item   style={{marginTop:20}}
            title=""
            left={props => <Text style={{color:'#000537',fontSize:14}}>in Stock</Text> }
            right={props => <Text style={{color:'#000537',fontSize:14,}}>23</Text>}
        />
       <List.Item   
            title=""
            left={props => <Text style={{color:'#000537',fontSize:14}}>Update Stock  Quantity</Text> }
            right={props => <Text style={{color:'#000537',fontSize:14,}}>24</Text>}
        />
        <List.Item   style={{marginTop:20,backgroundColor:"#dcdcdc",borderRadius:7,paddingTop:20,marginBottom:50}}
            left={props => <Text style={{color:'#000537',fontSize:14}}>Total Stock</Text> }
            right={props => <Text style={{color:'#000537',fontSize:14,fontWeight:"bold"}}>47</Text>}
        />
        <View  style={{flex: 1, flexDirection: 'row', marginTop:20,marginBottom:40}}>
          <View>
            <Button style = {styles.inputaddnew}  > DONE & ADD NEW</Button>
          </View>
          <View>
          <Button  onPress={hideDialog} style = {styles.inputdone}  > DONE</Button>
          </View>
        </View>  
        </View> 
        
        <Dialog.Actions>
        </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>


   
  );
};

export default StockManagement;
