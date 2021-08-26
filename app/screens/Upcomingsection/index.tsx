import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity,View ,} from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'react-native-paper';

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




interface IState {
  loginReducer: ILoginState;
}

const UpcomingSection: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);

  return (
    <>

    <Grid style={styles.borderClubs}>
     <Col size={15} style={styles.bgnumber}>
      <Text style={{color:'#fff',fontSize:10,textTransform:'uppercase',textAlign:'center',marginTop:12}}>May</Text>
      <Paragraph style={{color:'#fff',fontSize:19,textAlign:'center',marginTop:10}}>6</Paragraph>
      </Col>
      <Col size={70}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>7:00 - 9:00 AM</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Sportspark University of East, Nor...</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:10,opacity:.5}}>Courts 1, 5</Paragraph>
      </Col>
      <Col size={15}>
      <List.Icon icon="chevron-right" />
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
      <List.Icon icon="chevron-right" />
     </Col>
</Grid> 
<Grid style={styles.borderClubs}>
     <Col size={15} >
     <Avatar.Icon size={34} icon="shield" style={styles.ShieldOrange}/>
      </Col>
      <Col size={70}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>7:00 - 9:00 AM</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Sportspark University of East, Nor...</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:10,opacity:.5}}>Courts 1, 5</Paragraph>
      </Col>
      <Col size={15}>
      <List.Icon icon="chevron-right" />
     </Col>
</Grid>   
<View>
<Text style={{marginVertical:20, fontSize:14, fontWeight:'bold'}}>My Sessions</Text>
</View>
<Grid>
     <Col size={75} >
      <Text style={{marginVertical:20, fontSize:14, fontWeight:'bold'}}>Matches Played</Text>
     </Col> 
     <Col size={25} >

     </Col>
    </Grid>
    <View>
    <Grid>
    <Col>
    
    <Image style={{width:'100%',borderRadius:10}} source={require('../../assets/ScrollGroup.png')} />
    </Col>
    </Grid>
    </View>
    <View>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title style={{width:'10%',padding:0,margin:0}}>m</DataTable.Title>
        <DataTable.Title >Team A</DataTable.Title>
        <DataTable.Title >Score</DataTable.Title>
        <DataTable.Title >Team B</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row  style={{padding:0}}>
        <DataTable.Cell style={{width:'10%',padding:0,margin:0}}>1</DataTable.Cell>
        <DataTable.Cell  style={{width:'30%',padding:0,margin:0}}>
          <Avatar.Image size={20} source={require('../../assets/1.png')} />
          <Avatar.Image size={20} source={require('../../assets/2.png')} /></DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text>21</Text> </DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text>21</Text></DataTable.Cell>
        <DataTable.Cell><Avatar.Image size={30} source={require('../../assets/1.png')} />
          <Avatar.Image size={20} source={require('../../assets/2.png')} /></DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text style={styles.onlybg}> </Text></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row  style={{padding:0}}>
        <DataTable.Cell style={{width:'10%',padding:0,margin:0}}>2</DataTable.Cell>
        <DataTable.Cell  style={{width:'30%',padding:0,margin:0}}>
          <Avatar.Image size={20} source={require('../../assets/1.png')} />
          <Avatar.Image size={20} source={require('../../assets/2.png')} /></DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text>21</Text> </DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text>21</Text></DataTable.Cell>
        <DataTable.Cell><Avatar.Image size={30} source={require('../../assets/1.png')} />
          <Avatar.Image size={20} source={require('../../assets/2.png')} /></DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text style={styles.onlybg}> </Text></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row  style={{padding:0}}>
        <DataTable.Cell style={{width:'10%',padding:0,margin:0}}>3</DataTable.Cell>
        <DataTable.Cell  style={{width:'30%',padding:0,margin:0}}>
          <Avatar.Image size={20} source={require('../../assets/1.png')} />
          <Avatar.Image size={20} source={require('../../assets/2.png')} /></DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text>21</Text> </DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text>21</Text></DataTable.Cell>
        <DataTable.Cell><Avatar.Image size={30} source={require('../../assets/1.png')} />
          <Avatar.Image size={20} source={require('../../assets/2.png')} /></DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text style={styles.onlybg}> </Text></DataTable.Cell>
      </DataTable.Row>
    </DataTable>
</View>
<Grid>
     <Col size={75} >
      <Text style={{marginVertical:20, fontSize:14, fontWeight:'bold'}}>Matches Played</Text>
     </Col> 
     <Col size={25} >
    
     </Col>
    </Grid>
    <View style={styles.borderscore}>
    <Text style={{marginVertical:20, fontSize:14, fontWeight:'bold',paddingLeft:20}}>Match 1</Text>
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
    <View style={styles.borderscore}>
    <Text style={{marginVertical:20, fontSize:14, fontWeight:'bold',paddingLeft:20}}>Match 2</Text>
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
    <Grid style={{flex: 1, flexDirection: 'row'}}>
     <Col size={50}>
      <Text style={{marginVertical:20, fontSize:14, fontWeight:'bold'}}>My Gallery</Text>
     </Col> 
     <Col size={50}>
       <Text style={{fontSize:10, color:"#CF3918",marginTop:22,textAlign:'right'}}> View more </Text>
     </Col>
    </Grid>
    <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: "32%",marginRight:7,}}>
          <Image style={{width:'100%',borderRadius:5}} source={require('../../assets/gl1.png')}/>
        </View>
        <View style={{width: "32%",marginRight:7}}>
          <Image style={{width:'100%',borderRadius:5}} source={require('../../assets/gl2.png')}/>
        </View>
        <View style={{width: "32%",}}>
          <Image style={{width:'100%',borderRadius:5}} source={require('../../assets/gl3.png')}/>
        </View>
    </View>
    <View style={{flex: 1, flexDirection: 'row',marginTop:7,}}>
        <View style={{width: "32%",marginRight:7,}}>
          <Image style={{width:'100%',borderRadius:5}} source={require('../../assets/gl1.png')}/>
        </View>
        <View style={{width: "32%",marginRight:7}}>
          <Image style={{width:'100%',borderRadius:5}} source={require('../../assets/gl2.png')}/>
        </View>
        <View style={{width: "32%",}}>
          <Image style={{width:'100%',borderRadius:5}} source={require('../../assets/gl3.png')}/>
        </View>
    </View>
    <View style={{flex: 1, flexDirection: 'row',marginTop:7,marginBottom:30}}>
        <View style={{width: "32%",marginRight:7,}}>
          <Image style={{width:'100%',borderRadius:5}} source={require('../../assets/gl1.png')}/>
        </View>
        <View style={{width: "32%",marginRight:7}}>
          <Image style={{width:'100%',borderRadius:5}} source={require('../../assets/gl2.png')}/>
        </View>
        <View style={{width: "32%",}}>
          <Image style={{width:'100%',borderRadius:5}} source={require('../../assets/gl3.png')}/>
        </View>
    </View>
</>
  );
};

export default UpcomingSection;
