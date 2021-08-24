import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Text, Button, Title, Badge, List, Avatar, RadioButton, Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';

interface IState {
  loginReducer: ILoginState;
}

const AddTopup: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState('first');
  
  return (
    <ScrollView>
            <List.Item
        title="Add Topup"
        description="Topup #78"
        left={props =>  <List.Icon  icon="close" />}

      />

     <Title>Topup Account</Title>

   <Row size={1}>
   <Badge style={styles.badge}>$ 3</Badge>
   <Badge style={styles.badge}>$ 7</Badge>
   <Badge style={styles.badge}>$ 10</Badge>
     <Badge style={styles.badge}>Other</Badge>
   
     </Row>

 <Title>Topup With</Title>
 <List.Item
        title="Add Topup"
        description="Add A New Payment Method"
        left={props =>  <List.Icon  icon="close" />}
      />

<List.Item
        title="Add Topup"
        description="Add A New Payment Method"
        left={props =>   <RadioButton
          value="first"
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('first')}
        />
        
      }
      right={props =>  <List.Icon  icon="apple"/>}
  
      />
      <List.Item
        title="Add Topup"
        description="Add A New Payment Method"
        left={props =>   <RadioButton
          value="first"
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('first')}
        />
        
      }
      right={props =>  <List.Icon  icon="apple"/>}
  
      />
      <List.Item
        title="Add Topup"
        description="Add A New Payment Method"
        left={props =>         <RadioButton
          value="first"
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('first')}
        />
        
      }
      right={props =>  <List.Icon  icon="apple"/>}
  
      />
        <Button style={styles.btnfinish} mode="contained" >Finish Top Up</Button> 
     </ScrollView>
  );
};

export default AddTopup;
