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
            <Avatar.Icon size={24} icon="shield" style={styles.clubsShield}/>
            <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:15}}>Shuttles</Text>
            
                  <Text style={{fontSize:13, color:"#000000",paddingLeft:15,opacity:.5}}>38 in stock</Text>
            </Card>
     <View>
      <Card style={styles.shawd}>
      <Avatar.Icon size={24} icon="shield" style={styles.clubsShield}/>
          <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:15}}>Rackets</Text>
          
          <Text style={{fontSize:13, color:"#000000",paddingLeft:15,opacity:.5}}>13 in stock</Text>
      </Card>
    </View>
        <View>
            <Card style={styles.shawd}>
            <Avatar.Icon size={24} icon="shield" style={styles.clubsShield}/>
                 <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:15}}>Nets</Text>
               
                 <Text style={{fontSize:13, color:"#000000",paddingLeft:15,opacity:.5}}>3 in stock</Text>
            </Card>
        </View>
    </ScrollView>
      </View>
      <Grid  style={{marginTop:20}} >
     <Col size={15} style={styles.bgnumber}>
     <Avatar.Icon size={24} icon="shield" style={styles.clubsShield}/>
      <Text style={{color:'#fff',fontSize:10,textTransform:'uppercase',textAlign:'center',marginTop:12}}>May</Text>
      <Paragraph style={{color:'#fff',fontSize:19,textAlign:'center',marginTop:10}}>6</Paragraph>
      </Col>
      <Col size={60}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>7:00 - 9:00 AM</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Sportspark University of East, Nor...</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:10,opacity:.5}}>Courts 1, 5</Paragraph>
      </Col>
      <Col size={25}>
        <Row>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>+23</Text>
      </Row>
      <List.Icon icon="chevron-right" />
     </Col>
</Grid> 
<Grid  style={{marginTop:20}} >
     <Col size={15} style={styles.bgnumber}>
      <Text style={{color:'#fff',fontSize:10,textTransform:'uppercase',textAlign:'center',marginTop:12}}>May</Text>
      <Paragraph style={{color:'#fff',fontSize:19,textAlign:'center',marginTop:10}}>6</Paragraph>
      </Col>
      <Col size={60}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>7:00 - 9:00 AM</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Sportspark University of East, Nor...</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:10,opacity:.5}}>Courts 1, 5</Paragraph>
      </Col>
      <Col size={25}>
        <Row>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>+23</Text>
      </Row>
      <List.Icon icon="chevron-right" />
     </Col>
</Grid> 
<Grid  style={{marginTop:20}} >
     <Col size={15} style={styles.bgnumber}>
     <Avatar.Icon size={24} icon="shield" style={styles.clubsShield}/>
      <Text style={{color:'#fff',fontSize:10,textTransform:'uppercase',textAlign:'center',marginTop:12}}>May</Text>
      <Paragraph style={{color:'#fff',fontSize:19,textAlign:'center',marginTop:10}}>6</Paragraph>
      </Col>
      <Col size={60}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>7:00 - 9:00 AM</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Sportspark University of East, Nor...</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:10,opacity:.5}}>Courts 1, 5</Paragraph>
      </Col>
      <Col size={25}>
        <Row>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>+23</Text>
      </Row>
      <List.Icon icon="chevron-right" />
     </Col>
</Grid> 
<Grid  style={{marginTop:20}} >
     <Col size={15} style={styles.bgnumber}>
     <Avatar.Icon size={24} icon="shield" style={styles.clubsShield}/>
      <Text style={{color:'#fff',fontSize:10,textTransform:'uppercase',textAlign:'center',marginTop:12}}>May</Text>
      <Paragraph style={{color:'#fff',fontSize:19,textAlign:'center',marginTop:10}}>6</Paragraph>
      </Col>
      <Col size={60}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>7:00 - 9:00 AM</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Sportspark University of East, Nor...</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:10,opacity:.5}}>Courts 1, 5</Paragraph>
      </Col>
      <Col size={25}>
        <Row>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>+23</Text>
      </Row>
      <List.Icon icon="chevron-right" />
     </Col>
</Grid> 
<Grid>
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
                title="6.00 - 7.00 pm "
                description="SpartSpark University Of East"
                left={props => <List.Icon {...props} icon="close"  />}
                right={props => <List.Icon {...props} icon="share-google"  />}
              />
        <Grid>
            <Col size={25}><Text >user</Text></Col>
            <Col size={50}><Switch /></Col>
            <Col size={25}><List.Icon icon="share-google"/></Col>
        </Grid>

        <Card.Title  style={styles.cardtitle}
            title="7-9 Tomarrow,23 April"
            left={(props) => <List.Icon {...props} icon="calendar"/>}
            />
        <Card.Title  style={styles.cardtitle}
            title="Spot Spark University Of East"
            left={(props) => <List.Icon {...props} icon="angle-right"/>}
            right={(props) => <List.Icon {...props} icon="chevron-right"/>}
            />
        <Card.Title  style={styles.cardtitle}
            title="7-9 Tomarrow,23 April"
            left={(props) => <List.Icon {...props} icon="calendar" />}
            />
        <Dialog.Actions>
            <Button onPress={hideDialog}><Text>Done</Text></Button>
        </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>
  );
};

export default NewExpenses;
