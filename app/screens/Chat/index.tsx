import React from 'react';
import { Image, View } from 'react-native';
import { Text, Button, Searchbar, List, Avatar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';


interface IState {
  loginReducer: ILoginState;
}

const Chat: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  const onSingleChat = () => NavigationService.navigate('SingleChat');
  const onOnboarding = () => NavigationService.navigate('Onboarding');
  return (
 <>
 <View style={styles.sidePadding}>
    <Text style={styles.schedule}>Chats</Text>   
    <Searchbar style={styles.search}
     placeholder="Search"
     onChangeText={onChangeSearch}
     value={searchQuery}
   /> 
         <List.Item style={styles.listLine} onPress={onSingleChat}
         titleStyle={{fontSize:16, paddingBottom:5, fontWeight:'bold'}}
        title="Might Eagles"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={styles.shield} size={34} icon="shield" />}
        right={props => <Text>12 pm</Text>}
      />
             <List.Item style={styles.listLine} onPress={onSingleChat}
             titleStyle={{fontSize:16, paddingBottom:5, fontWeight:'bold'}}
        title="Might Eagles"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={[styles.shield,styles.shieldpink]} size={34} icon="shield" />}
        right={props => <Text>12 pm</Text>}
      />
             <List.Item style={styles.listLine} onPress={onSingleChat}
             titleStyle={{fontSize:16, paddingBottom:5, fontWeight:'bold'}}
        title="Might Eagles"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={[styles.shield,styles.shieldpink]} size={34} icon="shield" />}
        right={props => <Text>12 pm</Text>}
      />
             <List.Item style={styles.listLine} onPress={onSingleChat}
             titleStyle={{fontSize:16, paddingBottom:5, fontWeight:'bold'}}
        title="Might Eagles"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={[styles.shield,styles.shieldgreen]} size={34} icon="shield" />}
        right={props => <Text>12 pm</Text>}
      />
              <List.Item style={styles.listLine} onPress={onSingleChat}
              titleStyle={{fontSize:16, paddingBottom:5, fontWeight:'bold'}}
        title="Might Eagles"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={styles.shield} size={34} icon="shield" />}
        right={props => <Text>12 pm</Text>}
      />
  <Button icon="camera" mode="contained" onPress={onOnboarding}>
    Press me
  </Button>
      </View>
   </>
  );
};

export default Chat;
