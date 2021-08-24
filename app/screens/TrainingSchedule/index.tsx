import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Text, Button, TextInput, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { SceneMap, TabView } from 'react-native-tab-view';
import TrainingTimetable from './TrainingTimetable';

interface IState {
  loginReducer: ILoginState;
}
const FirstRoute = () => (
<ScrollView>
  <TrainingTimetable/>
</ScrollView>
);


{/* Clubs */}
const SecondRoute = () => (
  <Text>dfghj</Text>
);

{/* Events */}
const ThirdRoute = () => (
<Text>dfghj</Text>

);
const FourthRoute = () => (
<Text>dfghj</Text>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth : FourthRoute,
});
const TrainingSchedule: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Group1' },
    { key: 'second', title: 'Group2' },
    { key: 'third', title: 'Group3' },
    { key: 'fourth', title: 'Group4' },
  ]);


  const dispatch = useDispatch();

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

export default TrainingSchedule;
