import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph, Colors, Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import CalendarStrip from 'react-native-calendar-strip';
import { ILoginState } from 'app/models/reducers/login';
import DropDown from 'react-native-paper-dropdown';
import NavigationService from 'app/navigation/NavigationService';
import styles from './styles';





interface IState {
  loginReducer: ILoginState;
}

const JuniorCoachingAddCoaches: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = React.useState(false);
  const onClubsetup = () => NavigationService.navigate('Clubsetup');
  const onViewCourtBooking = () => NavigationService.navigate('ViewCourtBooking');
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  
  const [gender, setGender] = React.useState();

  const genderList = [
    { label: "Male", value: "male" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  

  const sheetRef = React.useRef(null);
  return (
    <ScrollView>
   <List.Item 
        titleStyle={{fontSize:17, fontWeight:'bold'}}
        descriptionStyle={{fontSize:14, fontWeight:'bold'}}
        title="Add Coaches"
        left={props =>  <List.Icon {...props} icon="close" />}/>
      <View>
        <View style={{paddingHorizontal:15}}>
            <Searchbar style={{marginBottom:10,elevation: 0, borderBottomColor:'#ddd', borderBottomWidth:2,width:"100%"}}
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
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
          left={props => <Avatar.Image size={45} source={require('../../assets/NoPath3.png')} /> }
          right={props => <List.Icon {...props} icon="check-circle"  />}
        />
        <List.Item style={{borderBottomColor:'#ccc',borderBottomWidth:1,marginTop:10}}
          titleStyle={{fontSize:14,fontWeight:"700",color:'#000537'}}
          descriptionStyle={{fontSize:12,color:'#000537'}}
          title="Ahsoka Tano"
          description="@caras"
          left={props => <Avatar.Image size={45} source={require('../../assets/NoPath2.png')} /> }
          right={props => <List.Icon {...props} icon="check-circle"  color={Colors.green800}/>}
        />
        <List.Item style={{borderBottomColor:'#ccc',borderBottomWidth:1,marginTop:10}}
          titleStyle={{fontSize:14,fontWeight:"700",color:'#000537'}}
          descriptionStyle={{fontSize:12,color:'#000537'}}
          title="Ahsoka Tano"
          description="@caras"
          left={props => <Avatar.Image size={45} source={require('../../assets/NoPath5.png')} /> }
          right={props => <List.Icon {...props} icon="check-circle" />}
        />
        <List.Item style={{marginTop:10}}
          titleStyle={{fontSize:14,fontWeight:"700",color:'#000537'}}
          descriptionStyle={{fontSize:12,color:'#000537'}}
          title="Ahsoka Tano"
          description="@caras"
          left={props => <Avatar.Image size={45} source={require('../../assets/NoPath1.png')} /> }
          right={props => <List.Icon {...props} icon="check-circle"  />}
        />
      </View>
      <List.Item style={{borderTopColor:'#ccc',borderTopWidth:2,marginVertical:15}}
          left={props => <Text style={{paddingTop:10,fontSize:12,color:'#000537'}}>1 Members Selected</Text> }
          right={props => <Button color={Colors.white}  style={{backgroundColor:'#CF3918',borderRadius:20}}>Done</Button>}
        />
    </View>   

 </ScrollView>     
   
  );
};

export default JuniorCoachingAddCoaches;
