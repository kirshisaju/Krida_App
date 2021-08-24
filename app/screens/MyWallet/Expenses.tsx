import React from 'react';
import { Image, View } from 'react-native';
import { Text, Button, List, Avatar, FAB, Drawer } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Searchbar } from 'react-native-paper';

 
interface IState {
  loginReducer: ILoginState;
}


const Expenses: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onSignup = () => NavigationService.navigate('Signup');
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const [index, setIndex] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [active, setActive] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

 


  return (
 
  <>
  <View style={styles.sidePadding}>
  <FAB
          style={styles.fabs}
          small
          icon="plus"
       //   onPress={onCreateevent}
          />
       <Searchbar style={styles.search}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
<List.Item style={styles.listLine}
        titleStyle={{fontSize:16, paddingBottom:5, fontWeight:'bold'}}
        title="Mighty Eagles"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={styles.shield} size={34} icon="shield" />}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
      <List.Item style={styles.listLine}
       titleStyle={{fontSize:16, paddingBottom:5, fontWeight:'bold'}}
        title="Mighty Eagles"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={[styles.shield,styles.shieldpink]} size={34} icon="shield" />}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
        <List.Item style={styles.listLine}
        titleStyle={{fontSize:16, paddingBottom:5, fontWeight:'bold'}}
        title="Mighty Eagles"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={styles.shield} size={34} icon="shield" />}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
        <List.Item style={styles.listLine}
        titleStyle={{fontSize:16, paddingBottom:5, fontWeight:'bold'}}
        title="Mighty Eagles"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={[styles.shield,styles.shieldpink]} size={34} icon="shield" />}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
      
           <Drawer.Section title="Some title">
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
    </View>
  </>
  

  );
};

export default Expenses;
