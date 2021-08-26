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

const PremiumClubs: React.FC = () => {
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
 
  
  const [gender, setGender] = React.useState();

  const genderList = [
    { label: "Shuttlecock", value: "Shuttlecock" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  
  const sheetRef = React.useRef(null);
  return (

 <ScrollView>
     <Button icon="camera" mode="contained" onPress={onCourtBooking}>
  Court Booking
  </Button>
  <Button icon="camera" mode="contained" onPress={onStockManagement}>
  Manage Stock
  </Button>
  <Button 
      icon="camera" mode="contained" onPress={onCreateNewExpense}>
    CreateNewExpence
  </Button>
  
   <View style={styles.sidePadding}>
        
        <List.Item 
           titleStyle={{fontSize:17, fontWeight:'bold'}}
           descriptionStyle={{fontSize:14, fontWeight:'bold'}}
             title="Premier Club"
             description="Norwich, UK"
             left={props =>  <List.Icon {...props} icon="chevron-left" />}
        />
   <Text style={{fontSize:14, fontWeight:'bold'}}>Players</Text>
   <View style={{marginTop:10}}>
       <ScrollView
         horizontal //scrolling left to right instead of top to bottom
         showsHorizontalScrollIndicator={false} //hides native scrollbar
         scrollEventThrottle={10} //how often we update the position of the indicator bar
         pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
       >
          <View>
           <Card style={styles.shawd} >
           <Image style={{width:'100%',borderTopLeftRadius:8,borderTopRightRadius:8}} source={require('../../assets/stock-photo.png')} />
           <Text style={{fontSize:17, fontWeight:'bold',color:'#000537', marginTop:20,paddingLeft:12}}>Ahsoka Tano</Text>
           <View style={{flex: 1, flexDirection: 'row',paddingBottom:10}}>
             <View style={{width: 130, }}>
             <List.Icon icon="clock" style={{marginLeft:0}}/>
               <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:15}}>Sessions</Text>
               <ProgressBar progress={0.5} color={Colors.blue800} style={{marginLeft:15,marginVertical:10}}/>
               <Text style={{fontSize:13, color:"#000000",paddingLeft:15,opacity:.5}}>38 of 93 Played</Text>
             </View>
             <View style={{width: 130,paddingRight:10 }}>
             <List.Icon icon="clock" style={{marginLeft:0}}/>
               <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:15}}>Matches</Text>
               <ProgressBar progress={0.5} color={Colors.red800} style={{marginLeft:15,marginVertical:10}}/>
               <Text style={{fontSize:13, color:"#000000",paddingLeft:15,opacity:.5}}>200 of 260 Won</Text>
             </View>
           </View>
           </Card>
           </View>
       <View>
       <Card style={styles.shawd} >
           <Image style={{width:'100%',borderTopLeftRadius:8,borderTopRightRadius:8}} source={require('../../assets/stock-photo.png')} />
           <Text style={{fontSize:17, fontWeight:'bold',color:'#000537', marginTop:20,paddingLeft:12}}>Ahsoka Tano</Text>
           <View style={{flex: 1, flexDirection: 'row',paddingBottom:10}}>
             <View style={{width: 130, }}>
             <List.Icon icon="clock" style={{marginLeft:0}}/>
               <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:15}}>Sessions</Text>
               <ProgressBar progress={0.5} color={Colors.blue800} style={{marginLeft:15,marginVertical:10}}/>
               <Text style={{fontSize:13, color:"#000000",paddingLeft:15,opacity:.5}}>38 of 93 Played</Text>
             </View>
             <View style={{width: 130,paddingRight:10 }}>
             <List.Icon icon="clock" style={{marginLeft:0}}/>
               <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:15}}>Matches</Text>
               <ProgressBar progress={0.5} color={Colors.red800} style={{marginLeft:15,marginVertical:10}}/>
               <Text style={{fontSize:13, color:"#000000",paddingLeft:15,opacity:.5}}>38 of 93 Played</Text>
             </View>
           </View>
           </Card> 
       </View>
       <View>
       <Card style={styles.shawd} >
           <Image style={{width:'100%',borderTopLeftRadius:8,borderTopRightRadius:8}} source={require('../../assets/stock-photo.png')} />
           <Text style={{fontSize:17, fontWeight:'bold',color:'#000537', marginTop:20,paddingLeft:12}}>Ahsoka Tano</Text>
           <View style={{flex: 1, flexDirection: 'row',paddingBottom:10}}>
             <View style={{width: 130, }}>
             <List.Icon icon="clock" style={{marginLeft:0}}/>
               <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:15}}>Sessions</Text>
               <ProgressBar progress={0.5} color={Colors.blue800} style={{marginLeft:15,marginVertical:10}}/>
               <Text style={{fontSize:13, color:"#000000",paddingLeft:15,opacity:.5}}>38 of 93 Played</Text>
             </View>
             <View style={{width: 130,paddingRight:10 }}>
             <List.Icon icon="clock" style={{marginLeft:0}}/>
               <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:15}}>Matches</Text>
               <ProgressBar progress={0.5} color={Colors.red800} style={{marginLeft:15,marginVertical:10}}/>
               <Text style={{fontSize:13, color:"#000000",paddingLeft:15,opacity:.5}}>38 of 93 Played</Text>
             </View>
           </View>
           </Card> 
       </View>
   </ScrollView>
      <Text style={{fontSize:14, fontWeight:'bold',marginVertical:20,}}>Club Stats</Text>
      <View>
        <ScrollView
         horizontal //scrolling left to right instead of top to bottom
         showsHorizontalScrollIndicator={false} //hides native scrollbar
         scrollEventThrottle={10} //how often we update the position of the indicator bar
         pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
       >          
        <View>
           <Card style={styles.shawdbg}>
           <Image style={{width:'100%',borderRadius:15,height:200}} source={require('../../assets/MembersCard.png')} />
           </Card>
           </View>
           <View>
           <Card style={styles.shawdbg}>
           <Image style={{width:'100%',borderRadius:15,height:200}} source={require('../../assets/top3.png')} />
           </Card>
           </View>
           <View>
           <Card style={styles.shawdbg}>
           <Image style={{width:'100%',borderRadius:15,height:200}} source={require('../../assets/top2.png')} />
           </Card>
           </View>
           <View>
           <Card style={styles.shawdbg}>
           <Image style={{width:'100%',borderRadius:15,height:200}} source={require('../../assets/top1.png')} />
           </Card>
           </View>
         <View>
        </View>
       </ScrollView>
         </View>
      <View>
        <Title style={{marginTop:20, fontSize:14, fontWeight:'bold'}}>Club Management</Title>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Card style={styles.shawdmanage} >
            <List.Item style={{paddingBottom:0}}
              title=""
              left={props => <Text></Text>}
              right={props =>  <Image source={require('../../assets/Iconright.png')} style={{marginBottom:0}} />}/>
              <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', }}>
              <Image style={{paddingTop:0}} source={require('../../assets/Image13.png')}  />
                <Text style={{fontSize:14, fontWeight:'700',marginTop:5,color:'#CF3918'}}>Court</Text>
                <Text style={{fontSize:14, fontWeight:'700',marginTop:0,color:'#CF3918',paddingBottom:10}}>Booking</Text>
              </View>
            </Card>
            <Card style={styles.shawdmanage} >
            <List.Item style={{paddingBottom:0}}
              title=""
              left={props => <Text></Text>}
              right={props =>  <Image source={require('../../assets/Iconright.png')} style={{marginBottom:0}} />}/>
              <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', }}>
              <Image style={{paddingTop:0}} source={require('../../assets/checklist.png')}  />
                <Text style={{fontSize:14, fontWeight:'700',marginTop:5,color:'#CF3918'}}>Manage</Text>
                <Text style={{fontSize:14, fontWeight:'700',marginTop:0,color:'#CF3918',paddingBottom:10}}>Stock</Text>
              </View>
            </Card>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Card style={styles.shawdmanage} >
            <List.Item style={{paddingBottom:0}}
              title=""
              left={props => <Text></Text>}
              right={props =>  <Image source={require('../../assets/Iconright.png')} style={{marginBottom:0}} />}/>
              <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', }}>
              <Image style={{paddingTop:0}} source={require('../../assets/manage_accounts.png')}  />
                <Text style={{fontSize:14, fontWeight:'700',marginTop:5,color:'#CF3918'}}>Manage</Text>
                <Text style={{fontSize:14, fontWeight:'700',marginTop:0,color:'#CF3918',paddingBottom:10}}>Members</Text>
              </View>
            </Card>
            <Card style={styles.shawdmanage} >
            <List.Item style={{paddingBottom:0}}
              title=""
              left={props => <Text></Text>}
              right={props =>  <Image source={require('../../assets/Iconright.png')} style={{marginBottom:0}} />}/>
              <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', }}>
              <Image style={{paddingTop:0}} source={require('../../assets/Image14.png')}  />
                <Text style={{fontSize:14, fontWeight:'700',marginTop:5,color:'#CF3918'}}>Manage</Text>
                <Text style={{fontSize:14, fontWeight:'700',marginTop:0,color:'#CF3918',paddingBottom:10}}>Expenses</Text>
              </View>
            </Card>
          </View>
      </View>
       <View>
         <Title style={{marginVertical:10, fontSize:14, fontWeight:'bold'}}>Club Sessions</Title>
         <View>
        <ScrollView
         horizontal //scrolling left to right instead of top to bottom
         showsHorizontalScrollIndicator={false} //hides native scrollbar
         scrollEventThrottle={10} //how often we update the position of the indicator bar
         pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
       >          
        <View>
           <Card style={styles.shawdbg}>
           <Image style={{width:'100%',borderRadius:15,height:200}} source={require('../../assets/Untitled-2.png')} />
           </Card>
           </View>
           <View>
           <Card style={styles.shawdbg}>
           <Image style={{width:'100%',borderRadius:15,height:200}} source={require('../../assets/sl1.png')} />
           </Card>
           </View>
           <View>
           <Card style={styles.shawdbg}>
           <Image style={{width:'100%',borderRadius:15,height:200}} source={require('../../assets/sl2.png')} />
           </Card>
           </View>
           <View>
           <Card style={styles.shawdbg}>
           <Image style={{width:'100%',borderRadius:15,height:200}} source={require('../../assets/sl3.png')} />
           </Card>
           </View>
         <View>
        </View>
       </ScrollView>
         </View>
       </View>
       <Grid>
        <Col size={75} >
          <Text style={{marginTop:20, fontSize:14, fontWeight:'bold'}}>Matches</Text>
        </Col> 
        <Col size={25} >
        
        </Col>
       </Grid>
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
        <DataTable.Cell  style={{width:'30%',padding:0,margin:0}}>
          <Avatar.Image source={require('../../assets/1.png')} style={{width:'100%'}} />
          <Avatar.Image source={require('../../assets/2.png')} style={{width:'100%'}} /></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row  style={{padding:0}}>
        <DataTable.Cell style={{width:'10%',padding:0,margin:0}}>2</DataTable.Cell>
        <DataTable.Cell  style={{width:'30%',padding:0,margin:0}}>
          <Avatar.Image size={20} source={require('../../assets/1.png')} />
          <Avatar.Image size={20} source={require('../../assets/2.png')} /></DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text>21</Text> </DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text>21</Text></DataTable.Cell>
        <DataTable.Cell>
          <Avatar.Image source={require('../../assets/1.png')} style={{width:'100%'}} />
          <Avatar.Image source={require('../../assets/2.png')} style={{width:'100%'}} /></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row  style={{padding:0}}>
        <DataTable.Cell style={{width:'10%',padding:0,margin:0}}>3</DataTable.Cell>
        <DataTable.Cell  style={{width:'30%',padding:0,margin:0}}>
          <Avatar.Image size={20} source={require('../../assets/1.png')} />
          <Avatar.Image size={20} source={require('../../assets/2.png')} /></DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text>21</Text> </DataTable.Cell>
        <DataTable.Cell  style={{width:'10%',padding:0,margin:0}}><Text>21</Text></DataTable.Cell>
        <DataTable.Cell>
          <Avatar.Image source={require('../../assets/1.png')} style={{width:'100%'}} />
          <Avatar.Image source={require('../../assets/2.png')} style={{width:'100%'}} />
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  </View>
     </View>
     <Grid>
      <Col size={75} >
        <Text style={{marginTop:20, fontSize:14, fontWeight:'bold'}}>Matches</Text>
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
     </View> 
        <Button 
      icon="camera" mode="contained" onPress={onManageClub}>
    ManageClub
  </Button>

  <Button icon="camera" mode="contained" onPress={onStockManagement}>
  Stock Management
  </Button>
  <Button icon="camera" mode="contained" onPress={onMyClubLanding}>
 My Club Landing
  </Button>
  <Button icon="camera" mode="contained" onPress={onNewExpenses}>
  Select Members for the expense
  </Button>
        
    </ScrollView>


   
  );
};

export default PremiumClubs;
