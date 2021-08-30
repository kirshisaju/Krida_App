import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph, Colors, Searchbar, FAB } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import CalendarStrip from 'react-native-calendar-strip';
import { ILoginState } from 'app/models/reducers/login';
import DropDown from 'react-native-paper-dropdown';
import NavigationService from 'app/navigation/NavigationService';
import styles from './styles';
import BottomSheet from 'reanimated-bottom-sheet';


interface IState {
  loginReducer: ILoginState;
}

const JuniorCoachingLesson: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = React.useState(false);
  const onClubsetup = () => NavigationService.navigate('Clubsetup');
  const onViewCourtBooking = () => NavigationService.navigate('ViewCourtBooking');
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  
  const renderContent = () => ( 
    <View
    style={{
      backgroundColor: 'white',
      padding: 16,
      height: 1000,
      width:"100%",
    }}
  >
    <List.Item 
        titleStyle={{fontSize:18,color:"#000537",fontWeight:'bold'}}
        title="Create Category"
        left={props =>  <List.Icon color={Colors.black} icon="close" />}  />
    <View style={{paddingHorizontal:15,paddingBottom:20}}>
      <View style = {{marginBottom:10,marginTop:0}} > 
        <TextInput 
          mode='outlined'  
          label= "Category"
          underlineColorAndroid = "transparent"
          placeholder = "Enter category name"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          >
        </TextInput>
      </View>
      <Button color={Colors.white}  style={{backgroundColor:'#CF3918',marginVertical:20,}}>Done</Button>
    </View>
  </View>
  );
  
  const [gender, setGender] = React.useState();
  const sheetRef = React.useRef(null);
  const genderList = [
    { label: "Male", value: "male" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  


  return (
    <ScrollView>
 <List.Item 
        titleStyle={{fontSize:18,color:"#000537",fontWeight:'bold'}}
        title="Lesson"
        left={props =>  <List.Icon color={Colors.black} icon="chevron-left" />}  />
    <View style={{paddingHorizontal:15,paddingBottom:20}}>
    <Searchbar style={styles.search}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
     <View style={{marginTop:10,width:'50%'}}> 
        <DropDown 
          label={"All"}
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
      <View style={{flex: 1, flexDirection: 'row',marginVertical:20,borderBottomWidth:1,borderBottomColor:'#ccc',paddingBottom:10,paddingTop:10}}>
          <View style={{width:"20%", marginTop:10}}> 
            <Avatar.Icon style={{backgroundColor:"#EC7961"}} size={50} color={Colors.white} icon="run" />
          </View>
          <View style={{width:"70%", }}> 
            <Text style={{fontSize:16,color:"#000537",fontWeight:"bold"}}>Warm up exercise</Text>
            <Text style={{fontSize:14,color:"#000537",fontWeight:"bold"}}>Category: General</Text>
            <Text style={{fontSize:12,color:"#000537",paddingTop:5,opacity:.5}}>2 Videos, 10 Images</Text>
          </View>
          <View style={{width:"10%", }}> 
            <List.Icon icon="chevron-right" />
          </View>
        </View>
        <View style={{marginBottom:200}}>
          <FAB  style={styles.fabs}  small icon="plus"  onPress={() => sheetRef.current.snapTo(0)} />
          </View>
    </View>

    <BottomSheet
              ref={sheetRef}
              snapPoints={[450, 300, 0]}
              borderRadius={10}
              initialSnap={2}
              renderContent={renderContent}
    />
              
              <BottomSheet
              ref={sheetRef1}
              snapPoints={[450, 300, 0]}
              borderRadius={10}
              initialSnap={2}
              renderContent={renderContent1}
    />
           

   </ScrollView>   
   
  );
};

export default JuniorCoachingLesson;
