import React from 'react';
import { Image, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { TabView, SceneMap } from 'react-native-tab-view';
import Expenses from './Expenses';
import Toups from './Toups';

interface IState {
  loginReducer: ILoginState;
}
const FirstRoute = () => (
<Expenses/>
);


{/* Clubs */}
const SecondRoute = () => (
  <Toups/>
)
;

const MyWallet: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onSignup = () => NavigationService.navigate('Signup');
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const [index, setIndex] = React.useState(0);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
 
  });
  const [routes] = React.useState([
    { key: 'first', title: 'Expenses' },
    { key: 'second', title: 'Topups' },
    
  ]);


  return (
 
  <>
     <TabView
        swipeEnabled={false}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        tabStyle={{width:'auto'}}/>
  </>

  );
};

export default MyWallet;
