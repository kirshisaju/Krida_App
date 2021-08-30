import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph, FAB,Colors, DataTable, Searchbar  } from 'react-native-paper';
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

const JuniorClubMemberAndSchedule: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
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
  const onJuniorCoachingLesson = () => NavigationService.navigate('JuniorCoachingLesson');

  const [gender, setGender] = React.useState();

  const genderList = [
    { label: "Wednesdays", value: "Wednesdays" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
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
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth : FourthRoute,
  });
  const [index, setIndex] = React.useState(0);

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
  const sheetRef = React.useRef(null);
  return (
   <ScrollView style={{backgroundColor:'#fff'}}>
 
      <List.Item 
        titleStyle={{fontSize:17, fontWeight:'bold'}}
        descriptionStyle={{fontSize:14, fontWeight:'bold'}}
        title="Sessions for 12, Jul 2021"
        left={props =>  <List.Icon {...props} icon="chevron-left" />}/>
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
      <View style={{paddingHorizontal:15,marginVertical:10}}>
        <View style={{flex: 1, flexDirection: 'row',marginTop:20}}>
          <View style={{width: '100%', }}>
            <Text style={{color:'#000537',fontSize:14,fontWeight:'700',margin:0,paddingTop:5}}>Schedule</Text>
            <Paragraph style={{fontSize:14,margin:0}}>Wednesdays, 06:00PM - 07:00PM</Paragraph>
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
        </View>
        <Text style={{fontSize:14, fontWeight:'bold',marginTop:20}}>Coaches</Text>
        <View style={{flex: 1, flexDirection: 'row',marginTop:15}}>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath2.png')} />
            <Text style={{paddingLeft:10,fontSize:10,color:"#000537",paddingTop:10}}>Harold</Text>
          </View>
        </View>
        <Text style={{fontSize:14, fontWeight:'bold',marginTop:20}}>Execute Lesson Plan</Text>
        <View style={{flex: 1, flexDirection: 'row',marginTop:5}}>
          <View style={{width:"11%", }}> 
            <List.Icon color={Colors.red900} style={{paddingTop:0,margin:0,}} icon="plus-circle-outline"  />
          </View>
          <View style={{width:"40%", }}> 
            <Text style={{fontSize:10,color:"#CF3918",paddingTop:13}} onPress={onJuniorCoachingLesson}>Add Lesson</Text>
          </View>
          <View style={{width:"45%", }}> 
            <Text style={{paddingLeft:12,fontSize:10,color:"#CF3918",paddingTop:10,textAlign:'right'}}>Swipe left to remove lesson</Text>
          </View>
        </View>
        <View style={{borderColor:'#ccc',borderWidth:1,borderRadius:8,marginTop:15}}>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,marginBottom:10,borderBottomColor:'#ccc',borderBottomWidth:1,padding:5}}>
            <View style={{width:"15%", }}> 
              <List.Icon color={Colors.grey800} icon="clock-outline" style={{alignContent:'center',alignSelf:'center',alignItems:'center',paddingBottom:0,marginVertical:0}} />
              <Text style={{fontSize:12,color:"#000537",paddingTop:0,textAlign:'center',opacity:.5}}>10 min</Text>
            </View>
            <View style={{width:"70%", }}> 
              <Text style={{paddingLeft:12,fontSize:16,color:"#000537",paddingTop:5,}}>Warm Up Exercise</Text>
            </View>
            <View style={{width:"10%", }}> 
            <List.Icon color={Colors.green800} icon="check-circle" />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,marginBottom:10,borderBottomColor:'#ccc',borderBottomWidth:1,padding:5}}>
            <View style={{width:"15%", }}> 
              <List.Icon color={Colors.grey800} icon="clock-outline" style={{alignContent:'center',alignSelf:'center',alignItems:'center',paddingBottom:0,marginVertical:0}} />
              <Text style={{fontSize:12,color:"#000537",paddingTop:0,textAlign:'center',opacity:.5}}>10 min</Text>
            </View>
            <View style={{width:"70%", }}> 
              <Text style={{fontSize:16,color:"#000537",paddingTop:5,}}>Lesson: Back hand clear stroke</Text>
              <Text style={{fontSize:16,color:"#000537",}}>Category: Service</Text>
            </View>
            <View style={{width:"10%", }}> 
            <List.Icon color={Colors.grey500} icon="check-circle" />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,marginBottom:10,borderBottomColor:'#ccc',borderBottomWidth:1,padding:5}}>
            <View style={{width:"15%", }}> 
              <List.Icon color={Colors.grey800} icon="clock-outline" style={{alignContent:'center',alignSelf:'center',alignItems:'center',paddingBottom:0,marginVertical:0}} />
              <Text style={{fontSize:12,color:"#000537",paddingTop:0,textAlign:'center',opacity:.5}}>10 min</Text>
            </View>
            <View style={{width:"70%", }}> 
              <Text style={{fontSize:16,color:"#000537",paddingTop:5,}}>Lesson: Back hand clear stroke</Text>
              <Text style={{fontSize:16,color:"#000537",}}>Category: Service</Text>
            </View>
            <View style={{width:"10%", }}> 
            <List.Icon color={Colors.grey500} icon="check-circle" />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,marginBottom:10,borderBottomColor:'#ccc',padding:5}}>
            <View style={{width:"15%", }}> 
              <List.Icon color={Colors.grey800} icon="clock-outline" style={{alignContent:'center',alignSelf:'center',alignItems:'center',paddingBottom:0,marginVertical:0}} />
              <Text style={{fontSize:12,color:"#000537",paddingTop:0,textAlign:'center',opacity:.5}}>10 min</Text>
            </View>
            <View style={{width:"70%", }}> 
              <Text style={{fontSize:16,color:"#000537",paddingTop:5,}}>Lesson: Back hand clear stroke</Text>
              <Text style={{fontSize:16,color:"#000537",}}>Category: Service</Text>
            </View>
            <View style={{width:"10%", }}> 
            <List.Icon color={Colors.grey500} icon="check-circle" />
            </View>
          </View>
        </View>
        <Text style={{fontSize:14, fontWeight:'bold',marginTop:20}}>Matches</Text>
        <View style={{flex: 1, flexDirection: 'row',marginTop:10}}>
          <View style={{width:"11%", }}> 
            <List.Icon color={Colors.red900} style={{paddingTop:0,margin:0,}} icon="plus-circle-outline"  />
          </View>
          <View style={{width:"89%", }}> 
            <Text style={{fontSize:10,color:"#CF3918",paddingTop:13}}>Add Match</Text>
          </View>
        </View>
        <View style={{borderColor:'#ccc',borderWidth:1,borderRadius:8,marginTop:15,borderBottomWidth:5,borderBottomColor:'#FF3B30',paddingBottom:15}}>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,marginBottom:10,borderBottomColor:'#ccc',padding:5}}>
            <View style={{width:"15%",margin:0 }}> 
              <List.Icon color={Colors.grey500} icon="close-circle" style={{marginLeft:0}} />
            </View>
            <View style={{width:"70%", }}> 
              <Text style={{fontSize:14,color:"#000537",paddingTop:15,textAlign:'center',fontWeight:'700'}}>Match 2</Text>
            </View>
            <View style={{width:"10%", }}> 
            <List.Icon color={Colors.grey500} icon="check-circle" />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0}}>
          <View style={{width:"20%", paddingLeft:10}}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath2.png')} />
            <Text style={{paddingLeft:10,fontSize:10,color:"#000537",paddingTop:10}}>Ashoka</Text>
          </View>
          <View style={{width:"20%", paddingLeft:10}}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
            <Text style={{fontSize:10,color:"#000537",paddingTop:10}}>Carasynthia</Text>
          </View>
          <View style={{width:"20%", alignSelf:'center'}}> 
            <Text style={{textAlign:"center",fontSize:14,color:"#000537",opacity:.5}}>vs</Text>
          </View>
          <View style={{width:"20%", }}> 
          <Avatar.Icon size={50} icon="plus" color={Colors.red900} style={{backgroundColor:"#ff40407a"}} />
            <Text style={{paddingLeft:15,fontSize:10,color:"#000537",paddingTop:5,opacity:.5}}>Select player</Text>
          </View>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath3.png')} />
            <Text style={{paddingLeft:15,fontSize:10,color:"#000537",paddingTop:10}}>Moff</Text>
          </View>
        </View>
        </View>
        <View style={styles.borderscore}>
          <View style={{flex: 1, flexDirection: 'row',}}>
            <View style={{width:"85%", }}> 
            <Text style={{marginVertical:20, fontSize:14, fontWeight:'bold',paddingLeft:20}}>Match 1</Text>
            </View>
            <View style={{width:"10%",paddingTop:20}}> 
            <Avatar.Icon size={30} icon="pencil" style={{backgroundColor:"#E75333"}} />
            </View>
          </View>
          
          <Grid style={{padding:20}}>
          <Col size={40} >
          <Grid>
          <Col size={50} >
          <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
          <Text style={{color:'#000537',fontSize:12,paddingLeft:10,paddingTop:10}}>Steve</Text>
            </Col>
            <Col size={50} >
          <Avatar.Image size={50} source={require('../../assets/NoPath3.png')} />
          <Text style={{color:'#000537',fontSize:12,paddingLeft:10,paddingTop:10}}>Mike</Text>
            </Col>
            </Grid>
          </Col> 
          <Col size={10}> 
          <Text style={{paddingTop:30,color:'#000537',fontSize:12,opacity:.5}}>VS</Text>
          </Col> 
          <Col size={40} >
          <Grid>
          <Col size={50} >
          <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
          <Text style={{color:'#000537',fontSize:12,paddingLeft:10,paddingTop:10}}>Mike</Text>
            </Col>
            <Col size={50} >
          <Avatar.Image size={50} source={require('../../assets/NoPath3.png')} />
          <Text style={{color:'#000537',fontSize:12,paddingLeft:10,paddingTop:10}}>Steve</Text>
            </Col>
            </Grid>
          </Col> 
          </Grid>
          <View style={styles.customWid}>
              <View><Image  source={require('../../assets/trophy.png')}  style={{ marginTop:5,marginRight:10}}/></View>
              <View><Text style={{color:'#000537',fontSize:20,fontWeight:'bold'}}>21</Text></View>
              <View><Text style={{color:'#000537',fontSize:12,opacity:.5,paddingHorizontal:20,paddingTop:5}}>Score</Text></View>
              <View><Text style={{color:'#000537',fontSize:20,fontWeight:'bold'}}>18</Text></View>
          </View>
        </View>
        <Text style={{fontSize:14, fontWeight:'bold',marginTop:20}}>Training feedback</Text>
        <View style={{borderColor:'#ccc',borderWidth:1,borderRadius:8,marginTop:15,}}>
        <View style={{flex: 1, flexDirection: 'row',marginTop:15,marginBottom:10,borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:10}}>
            <View style={{width:"25%", }}> 
            <Text style={{color:'#000537',fontSize:12,paddingLeft:5}}>Student</Text>
            </View>
            <View style={{width:"15%",}}> 
            <Text style={{color:'#000537',fontSize:12,paddingLeft:5}}>L1</Text>
            </View>
            <View style={{width:"15%", }}> 
            <Text style={{color:'#000537',fontSize:12,paddingLeft:5}}>L2</Text>
            </View>
            <View style={{width:"15%" }}> 
            <Text style={{color:'#000537',fontSize:12,paddingLeft:5}}>L3</Text>
            </View>
            <View style={{width:"15%",}}> 
            <Text style={{color:'#000537',fontSize:12,paddingLeft:5}}>L4</Text>
            </View>
            <View style={{width:"15%", }}> 
            <Text style={{color:'#000537',fontSize:12,paddingLeft:5}}>F/B</Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,marginBottom:10,borderBottomColor:'#ccc',borderBottomWidth:1,padding:5}}>
            <View style={{width:"25%",}}> 
            <Avatar.Image size={40} source={require('../../assets/NoPath3.png')} />
            <Text style={{color:'#000537',fontSize:12,paddingLeft:5}}>Steve</Text>
            </View>
            <View style={{width:"15%",marginTop:15 }}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginTop:15 }}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginTop:15 }}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginTop:15 ,}}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginLeft:0 }}> 
            <List.Icon color={Colors.red900} style={{marginLeft:0 }} icon="plus-circle" />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,marginBottom:10,borderBottomColor:'#ccc',borderBottomWidth:1,padding:5}}>
            <View style={{width:"25%",}}> 
            <Avatar.Image size={40} source={require('../../assets/NoPath3.png')} />
            <Text style={{color:'#000537',fontSize:12,paddingLeft:5}}>Steve</Text>
            </View>
            <View style={{width:"15%",marginTop:15 }}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginTop:15 }}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginTop:15 }}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginTop:15 ,}}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginLeft:0 }}> 
            <List.Icon color={Colors.red900} style={{marginLeft:0 }} icon="plus-circle" />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,marginBottom:10,borderBottomColor:'#ccc',borderBottomWidth:1,padding:5}}>
            <View style={{width:"25%",}}> 
            <Avatar.Image size={40} source={require('../../assets/NoPath3.png')} />
            <Text style={{color:'#000537',fontSize:12,paddingLeft:5}}>Steve</Text>
            </View>
            <View style={{width:"15%",marginTop:15 }}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginTop:15 }}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginTop:15 }}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginTop:15 ,}}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginLeft:0 }}> 
            <List.Icon color={Colors.red900} style={{marginLeft:0 }} icon="plus-circle" />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop:0,padding:5,paddingBottom:5}}>
            <View style={{width:"25%",}}> 
            <Avatar.Image size={40} source={require('../../assets/NoPath3.png')} />
            <Text style={{color:'#000537',fontSize:12,paddingLeft:5}}>Steve</Text>
            </View>
            <View style={{width:"15%",marginTop:15 }}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginTop:15 }}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginTop:15 }}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginTop:15 ,}}> 
              <Text style={{width:22,height:22,borderRadius:50,backgroundColor:'#34C759',textAlign:'center'}}></Text>
            </View>
            <View style={{width:"15%",marginLeft:0 }}> 
            <List.Icon color={Colors.red900} style={{marginLeft:0 }} icon="plus-circle" />
            </View>
          </View>
        </View>
        <Button color={Colors.white}  style={{backgroundColor:'#CF3918',marginVertical:20,}}>Done</Button>
      </View>




   </ScrollView>
   
  );
};

export default JuniorClubMemberAndSchedule;
