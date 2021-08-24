import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text, Title, Provider, Portal, Paragraph, Switch, DataTable, List, Searchbar, FAB, TextInput, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import CalendarStrip from 'react-native-calendar-strip';
import { Col, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

interface IState {
  loginReducer: ILoginState;
}

const News: React.FC = () => {

  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
 
  
  return (
    <>
    <View style={styles.sidePadding}>
    
    <List.Item 
        titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:20,marginBottom:20, fontWeight:'bold'}}
            title="News"
        
            left={props => <Text></Text>}
            />
    
      <Card.Title style={styles.newscard}
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:18, fontWeight:'bold',paddingLeft:50,}}
      subtitleStyle={{color: "rgba(0,0,0,0.7)", fontSize:15, fontWeight:'bold',paddingLeft:50,}}
      title="Clubs & Coches Prepare For"
      subtitle="14 hr | England"
      left={(props) => <Card.Cover style={styles.cardimage} source={{ uri: 'https://picsum.photos/700' }} />} 
      
      />
      <Card.Title style={styles.newscard}
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:18, fontWeight:'bold',paddingLeft:50,}}
      subtitleStyle={{color: "rgba(0,0,0,0.7)", fontSize:15, fontWeight:'bold',paddingLeft:50,}}
      title="Clubs & Coches Prepare For"
      subtitle="14 hr | England"
      left={(props) => <Card.Cover style={styles.cardimage} source={{ uri: 'https://picsum.photos/700' }} />} 
      />
      <Card.Title style={styles.newscard}
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:18, fontWeight:'bold',paddingLeft:50,}}
      subtitleStyle={{color: "rgba(0,0,0,0.7)", fontSize:15, fontWeight:'bold',paddingLeft:50,}}
      title="Clubs & Coches Prepare For"
      subtitle="14 hr | England"
      left={(props) => <Card.Cover style={styles.cardimage} source={{ uri: 'https://picsum.photos/700' }} />} 
      />
      <Card.Title style={styles.newscard}
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:18, fontWeight:'bold',paddingLeft:50,}}
      subtitleStyle={{color: "rgba(0,0,0,0.7)", fontSize:15, fontWeight:'bold',paddingLeft:50,}}
      title="Clubs & Coches Prepare For"
      subtitle="14 hr | England"
      left={(props) => <Card.Cover style={styles.cardimage} source={{ uri: 'https://picsum.photos/700' }} />} 
      />
       </View>
    </>
  );
};

export default News;