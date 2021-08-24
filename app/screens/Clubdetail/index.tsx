import React from 'react';
import { Image, ScrollView, Slider, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph,ProgressBar, Colors } from 'react-native-paper';
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
import ListIcon from 'react-native-paper/lib/typescript/components/List/ListIcon';
import NextSection from '../Nextsection';
import UpcomingSection from '../Upcomingsection';


interface IState {
  loginReducer: ILoginState;
}

const Clubdetail: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
 
  return (
    <ScrollView>
    <View style={styles.sidePadding}>
        <List.Item style={[]}
            title=""
            left={props => <List.Icon {...props} icon="format-align-left" />}
            right={props => <Avatar.Icon size={24} icon="shield" ></Avatar.Icon>
            }
          />
         <List.Item style={styles.borderClubs}
            titleStyle={{fontSize:15, fontWeight:'bold'}}
              title="Premier Club"
              description="SpartSpark University Of East"
              left={props =>  <Avatar.Icon size={24} icon="shield" style={styles.ShieldOrange}/>}
              right={props => <List.Icon {...props} icon="chevron-right" />}
         />
    <Text style={{marginTop:30, fontSize:14, fontWeight:'bold'}}>My Status</Text>
    <View style={{marginTop:20}}>
        <ScrollView
          horizontal //scrolling left to right instead of top to bottom
          showsHorizontalScrollIndicator={false} //hides native scrollbar
          scrollEventThrottle={10} //how often we update the position of the indicator bar
          pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
        >
            <Card style={styles.shawd} >
            <List.Icon icon="clock" style={{marginLeft:0}}/>
            <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:15}}>Sessions</Text>
            <ProgressBar progress={0.5} color={Colors.blue800} style={{marginLeft:15,marginVertical:10}}/>
                  <Text style={{fontSize:13, color:"#000000",paddingLeft:15,opacity:.5}}>38 of 93 Played</Text>
            </Card>
     <View>
      <Card style={styles.shawd}>
          <List.Icon icon="clock" style={{marginLeft:0}}/>
          <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:15}}>Sessions</Text>
          <ProgressBar progress={0.5} color={Colors.red800} style={{marginLeft:15,marginVertical:10}}/>
          <Text style={{fontSize:13, color:"#000000",paddingLeft:15,opacity:.5}}>38 of 93 Played</Text>
      </Card>
    </View>
        <View>
            <Card style={styles.shawd}>
                <List.Icon icon="clock" style={{marginLeft:0}}/>
                 <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:15}}>Sessions</Text>
                 <ProgressBar progress={0.5} color={Colors.red800} style={{marginLeft:15,marginVertical:10}}/>
                 <Text style={{fontSize:13, color:"#000000",paddingLeft:15,opacity:.5}}>38 of 93 Played</Text>
            </Card>
        </View>
    </ScrollView>
      <Title style={{marginVertical:20, fontSize:14, fontWeight:'bold'}}>Next Section</Title>
        <View>
          <NextSection/>
          <Title style={{marginVertical:20, fontSize:14, fontWeight:'bold'}}>Upcoming Section</Title>
          <UpcomingSection/>
        </View>
      </View>
      </View> 
    </ScrollView>
  );
};

export default Clubdetail;
