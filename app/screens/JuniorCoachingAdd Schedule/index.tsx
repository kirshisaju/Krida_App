import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph, FAB, Portal,ProgressBar,Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import { Modal, Provider } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import NavigationService from 'app/navigation/NavigationService';
import CreateNewLesson from '../CreateNewLesson';
import BottomSheet from 'reanimated-bottom-sheet';



interface IState {
  loginReducer: ILoginState;
}

const JuniorCoachingAddSchedule: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const [showDropDown, setShowDropDown] = React.useState(false);

 
  const renderContent = () => ( 
    <View
    style={{
      backgroundColor: 'white',
      padding: 16,
      height: 1000,
      width:"100%",
    }}
  >
<CreateNewLesson/>
  </View>
  );

  
  const [gender, setGender] = React.useState();

  const genderList = [
    { label: "Shuttlecock", value: "Shuttlecock" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  
  const sheetRef = React.useRef(null);
  return (

 <ScrollView>
 <List.Item 
        titleStyle={{fontSize:17, fontWeight:'bold'}}
        descriptionStyle={{fontSize:14, fontWeight:'bold'}}
        title="Add a plan for 12 Jul 2021 "
        left={props =>  <List.Icon {...props} icon="chevron-left" />}/>
    <View style={{paddingHorizontal:15}}>
      <View style={{flex: 1, flexDirection: 'row',marginTop:5}}>
        <View style={{width:"48%", }}> 
        <TextInput 
          mode='outlined'  
          label= "From"
          underlineColorAndroid = "transparent"
          placeholder = "06:00 PM"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          >
        </TextInput>
        <List.Icon  icon="clock-outline"  color={Colors.black} style={{position:'absolute',right:0,top:5}}/>
        </View>
        <View style={{width:"48%", marginLeft:10}}> 
          <TextInput 
            mode='outlined'  
            label= "To"
            underlineColorAndroid = "transparent"
            placeholder = "07:00 PM"
            placeholderTextColor = "black"
            autoCapitalize = "none"
            >
          </TextInput>
          <List.Icon  icon="clock-outline"  color={Colors.black} style={{position:'absolute',right:0,top:5}}/>
        </View>
      </View>
      <Text style={{fontSize:14, fontWeight:'bold',marginTop:20}}>Lesson Plan</Text>
        <View style={{flex: 1, flexDirection: 'row',marginTop:5}}>
          <View style={{width:"11%", }}> 
            <List.Icon color={Colors.red900} style={{paddingTop:0,margin:0,}} icon="plus-circle-outline"  />
          </View>
          <View style={{width:"80%", }}> 
            <Text style={{fontSize:10,color:"#CF3918",paddingTop:13}} onPress={showModal} >Add Lesson</Text>
          </View>
        </View>
        <View style={{borderColor:'#ccc',borderWidth:1,borderRadius:8,marginTop:15}}>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,marginBottom:0,borderBottomColor:'#ccc',borderBottomWidth:1,padding:5}}>
            <View style={{width:"15%", }}> 
              <List.Icon color={Colors.grey800} icon="clock-outline" style={{alignContent:'center',alignSelf:'center',alignItems:'center',paddingBottom:0,marginVertical:0}} />
              <Text style={{fontSize:12,color:"#000537",paddingTop:0,textAlign:'center',opacity:.5}}>10 min</Text>
            </View>
            <View style={{width:"70%", }}> 
              <Text style={{paddingLeft:12,fontSize:16,color:"#000537",paddingTop:15,}}>Warm Up Exercise</Text>
            </View>
            <View style={{width:"10%", }}> 
            <List.Icon color={Colors.red900} icon="minus-circle-outline" />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,marginBottom:0,borderBottomColor:'#ccc',borderBottomWidth:1,padding:5}}>
            <View style={{width:"15%", }}> 
              <List.Icon color={Colors.grey800} icon="clock-outline" style={{alignContent:'center',alignSelf:'center',alignItems:'center',paddingTop:0,marginVertical:0}} />
              <Text style={{fontSize:12,color:"#000537",marginTop:0,textAlign:'center',opacity:.5}}>10 min</Text>
            </View>
            <View style={{width:"70%", }}> 
              <Text style={{fontSize:16,color:"#000537",paddingTop:5,}}>Lesson: Back hand clear stroke</Text>
              <Text style={{fontSize:16,color:"#000537",}}>Category: Service</Text>
            </View>
            <View style={{width:"10%", }}> 
            <List.Icon color={Colors.red900} icon="minus-circle-outline" />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,marginBottom:0,borderBottomColor:'#ccc',borderBottomWidth:1,padding:5}}>
            <View style={{width:"15%", }}> 
              <List.Icon color={Colors.grey800} icon="clock-outline" style={{alignContent:'center',alignSelf:'center',alignItems:'center',paddingBottom:0,marginVertical:0}} />
              <Text style={{fontSize:12,color:"#000537",paddingTop:0,textAlign:'center',opacity:.5}}>10 min</Text>
            </View>
            <View style={{width:"70%", }}> 
              <Text style={{fontSize:16,color:"#000537",paddingTop:15,}}>Matches</Text>
            </View>
            <View style={{width:"10%", }}> 
            <List.Icon color={Colors.red900} icon="minus-circle-outline" />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,marginBottom:10,borderBottomColor:'#ccc',padding:5}}>
            <View style={{width:"15%", }}> 
              <List.Icon color={Colors.grey800} icon="clock-outline" style={{alignContent:'center',alignSelf:'center',alignItems:'center',paddingBottom:0,marginVertical:0}} />
              <Text style={{fontSize:12,color:"#000537",paddingTop:0,textAlign:'center',opacity:.5}}>10 min</Text>
            </View>
            <View style={{width:"70%", }}> 
              <Text style={{fontSize:16,color:"#000537",paddingTop:15,}}>Cool down with games</Text>
            </View>
            <View style={{width:"10%", }}> 
            <List.Icon color={Colors.red900} icon="minus-circle-outline" />
            </View>
          </View>
        </View>
        <Button color={Colors.white}  style={{backgroundColor:'#CF3918',marginVertical:20,}}>Done</Button>
    </View>
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
       
    <List.Item 
        title=""
        right={props =>  <List.Icon color={Colors.black} icon="close" />}  />
    <View style={{paddingHorizontal:15,paddingBottom:20}}>
        <View style={{flex: 1, flexDirection: 'row',marginTop:15}}>
          <View style={{width:"55%",marginTop:40 }}> 
            <Text style={{fontSize:14,color:"#000537",paddingTop:10,fontWeight:"bold"}}>Add Lesson</Text>
          </View>
          <View style={{width:"5%", }}> 
            <List.Icon color={Colors.red900} style={{paddingTop:0,margin:0,textAlign:'right'}} icon="plus-circle-outline"  />
          </View>
          <View style={{width:"38%", }}> 
            <Text style={{fontSize:12,color:"#CF3918",paddingTop:3,textAlign:'right',paddingBottom:40}}  onPress={() => sheetRef.current.snapTo(0)} >Create New Lesson</Text>
          </View>
          
        </View>
    <View style={{marginTop:15}}> 
        <DropDown 
            label={"General"}
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
    </View> 
    <View style={{marginTop:15}}> 
      <DropDown 
        label={"Warm up and Exercise"}
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
    </View> 
    <View style={{marginTop:15}}> 
      <DropDown 
        label={"15 min"}
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
    </View> 
      <Button color={Colors.white}  style={{backgroundColor:'#CF3918',marginVertical:25,}}>Done</Button>
    </View>

        </Modal>
      </Portal>
      <Button style={{marginTop: 70,height:100}} onPress={showModal}>
        Show
      </Button>
    </Provider>
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

export default JuniorCoachingAddSchedule;
