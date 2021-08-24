import React from 'react';
import { Image, View } from 'react-native';
import { Text, Button, Searchbar, List, Avatar, Title, TextInput, Paragraph } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';

interface IState {
  loginReducer: ILoginState;
}

const SingleChat: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [text, setText] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  return (
 <>
      
  <View style={styles.sidePadding}>
  <List.Item
        title="Might Eagles"   
        left={props =>  <List.Icon icon="close" />}
      />
    <Grid>
     
      <Text>Might Eagles</Text>
      <Paragraph>Hi this message is for you check your email for some</Paragraph>
    
      <Col ></Col>
  
     <Col ></Col>
      <Col >
        <Text>Might Eagles</Text>
        <Paragraph>Hi this message is for you check your email for some</Paragraph>
     </Col>
     
    <Col>
        <Text>1</Text>
    </Col>
    <Col>
        <Row>
            <Text>2</Text>
        </Row>
        <Row>
            <Text>3</Text>
        </Row>
    </Col>
</Grid>      
      <Grid>
        <Col >
        <List.Icon icon="plus" />
        </Col>
        <Col>
        <List.Icon icon="camera" />
        </Col>
        <Col size={2}>
        <TextInput
    
      value={text}
      onChangeText={text => setText(text)}
    />
  
        </Col>
      </Grid>
      </View>
   </>
  );
};

export default SingleChat;
