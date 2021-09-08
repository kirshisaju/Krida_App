import React from 'react';
import { Image, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Paragraph, Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';

interface IState {
  loginReducer: ILoginState;
}

const Notification: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [visibles, setVisibles] = React.useState(false);
  const showDialog2 = () => setVisibles(true);
  const hideDialog2= () => setVisibles(false);
  const [text, setText] = React.useState('');
  
  return (
    <>
    <ScrollView style={{paddingHorizontal:15,paddingVertical:20}}>
      <View style={{paddingBottom:20}}>
    <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10}}>
      <View style={{width:"20%", paddingTop:15 }}> 
      <Avatar.Image size={50} source={require('../../assets/NoPath4.png')} />
      </View>
      <View style={{width: "65%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,}}>Ahsoka Tano has invited you to an event: ’Norfolk Summer Badminton Event 2021’ held on 9th July…</Text>
      <View style={{flex: 1, flexDirection: 'row',marginTop:5}}>
        <View style={{width:"48%", }}> 
          <Button color={Colors.red900} style={{borderColor:'#CF3918',borderWidth:1,borderRadius:20,fontSize:10,margin:0}}>Accept</Button>
        </View>
        <View style={{width:"48%", marginLeft:10}}> 
          <Button color={Colors.grey500} style={{borderColor:'#ccc',borderWidth:1,borderRadius:20,fontSize:10,padding:0}}>Decline</Button>
        </View>
      </View>
      </View>
      <View style={{width: "15%", paddingTop:10}}>
        <Text style={{color:'#000537',fontSize:12,textAlign:"center",paddingTop:10}}>12 h</Text>
        <List.Icon icon="dots-horizontal" style={{marginTop:0}}/>
      </View>
    </View>
    <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10}}>
      <View style={{width:"20%", paddingTop:15 }}> 
      <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
      </View>
      <View style={{width: "65%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,}}>Ahsoka Tano has invited you to an event: ’Norfolk Summer Badminton Event 2021’ held on 9th July…</Text>
      
      </View>
      <View style={{width: "15%", paddingTop:10}}>
        <Text style={{color:'#000537',fontSize:12,textAlign:"center",paddingTop:10}}>12 h</Text>
        <List.Icon icon="dots-horizontal" style={{marginTop:0}}/>
      </View>
    </View>
    <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10}}>
      <View style={{width:"20%", paddingTop:15 }}> 
      <Avatar.Image size={50} source={require('../../assets/NoPath3.png')} />
      </View>
      <View style={{width: "65%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,}}>Ahsoka Tano has invited you to an event: ’Norfolk Summer Badminton Event 2021’ held on 9th July…</Text>
      <View style={{flex: 1, flexDirection: 'row',marginTop:5}}>
        <View style={{width:"48%", }}> 
          <Button color={Colors.red900} style={{borderColor:'#CF3918',borderWidth:1,borderRadius:20,fontSize:10,margin:0}}>Accept</Button>
        </View>
        <View style={{width:"48%", marginLeft:10}}> 
          <Button color={Colors.grey500} style={{borderColor:'#ccc',borderWidth:1,borderRadius:20,fontSize:10,padding:0}}>Decline</Button>
        </View>
      </View>
      </View>
      <View style={{width: "15%", paddingTop:10}}>
        <Text style={{color:'#000537',fontSize:12,textAlign:"center",paddingTop:10}}>12 h</Text>
        <List.Icon icon="dots-horizontal" style={{marginTop:0}}/>
      </View>
    </View>
    <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10}}>
      <View style={{width:"20%", paddingTop:15 }}> 
      <Avatar.Image size={50} source={require('../../assets/NoPath2.png')} />
      </View>
      <View style={{width: "65%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,}}>Ahsoka Tano has invited you to an event: ’Norfolk Summer Badminton Event 2021’ held on 9th July…</Text>
     
      </View>
      <View style={{width: "15%", paddingTop:10}}>
        <Text style={{color:'#000537',fontSize:12,textAlign:"center",paddingTop:10}}>12 h</Text>
        <List.Icon icon="dots-horizontal" style={{marginTop:0}}/>
      </View>
    </View>
    </View>
</ScrollView>
<>
           <Button onPress={showDialog2}>Modal 2</Button>
        <Dialog visible={visibles} onDismiss={hideDialog2} >
          <View style={{paddingBottom:30,paddingTop:10}}>
          <List.Item style={{padding:0}}
          title=""
          right={props =>  <List.Icon color={Colors.black} icon="close" />}
        />
        <List.Item style={{padding:0}}
        titleStyle={{color:'#000537',fontSize:14,fontWeight:'bold'}}
        descriptionStyle={{color:'#000537',fontSize:12,opacity:.5}}
  title="Delete"
  description="SpartSpark University Of East"
  left={props =>  <List.Icon color={Colors.red900} icon="delete" />}
/>
<List.Item style={{padding:0}}
titleStyle={{color:'#000537',fontSize:14,fontWeight:'bold'}}
descriptionStyle={{color:'#000537',fontSize:12,opacity:.5}}
  title="Mute"
  description="SpartSpark University Of East"
  left={props =>  <List.Icon color={Colors.red900} icon="close" />}
/>
<List.Item style={{padding:0}}
titleStyle={{color:'#000537',fontSize:14,fontWeight:'bold'}}
descriptionStyle={{color:'#000537',fontSize:12,opacity:.5}}
  title="Turn off"
  description="SpartSpark University Of East"
  left={props =>  <List.Icon color={Colors.red900}  icon="alarm" />}
/> 
<List.Item style={{padding:0}}
titleStyle={{color:'#000537',fontSize:14,fontWeight:'bold'}}
descriptionStyle={{color:'#000537',fontSize:12,opacity:.5}}
  title="View Setting"
  description="SpartSpark University Of East"
  left={props =>  <List.Icon color={Colors.red900}  icon="setting" />}
/>
</View>
           </Dialog>
           </>
        
   </>   
   
  );
};

export default Notification;
