import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { Text, Button, Searchbar, List, Avatar, Paragraph } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import DropDown from 'react-native-paper-dropdown';
import { ScrollView } from 'react-native-gesture-handler';

interface IState {
  loginReducer: ILoginState;
}

const Onboarding: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  const onSingleChat = () => NavigationService.navigate('SingleChat');
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [gender, setGender] = React.useState();
  const [text, setText] = React.useState('');
  const genderList = [
    { label: "Please Select", value: "Please Select" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  return (
 <>
 <ScrollView>
      <View style={styles.sidePadding}>
        <Text style={{color:'#000537',fontSize:24,fontWeight:'bold',textAlign:'center',paddingTop:30}}>Your Boarding </Text>
        <Paragraph style={{color:'#000537',fontSize:14,marginBottom:0,textAlign:'center',opacity:.5,paddingBottom:30}}>Badminton - Social club</Paragraph>
        <View style={{marginBottom:40}}>
        <Grid style={styles.bgwhite}>
          <Col size={10}>
          <Avatar.Image size={90} source={require('../../assets/NoPath3.png')} />
          </Col>
          <Col size={30} style={{paddingTop:10}}>
          <List.Icon icon="pencil" style={{paddingTop:20}}></List.Icon>
          </Col>
        </Grid>
        </View>
        <View style={{marginTop:10}}>
        <TextInput style={styles.line}
      mode="outlined"
      label="Outlined input"
      placeholder="First Name"
      
    />
    <TextInput style={styles.line}
      mode="outlined"
      label="Outlined input"
      placeholder="Last Name"/>
        <DropDown style={styles.line}
         mode='outlined'
          label={"Club Type"}
          value={gender}
          setValue={setGender}
          list={genderList}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          inputProps={{
          }}
        />
        <View>
        <Button style={styles.submit}> Submit</Button>
        </View>
        </View>
      </View>
      </ScrollView>
   </>
  );
};

export default Onboarding;
