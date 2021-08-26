import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import ForgotPassword from 'app/screens/ForgotPassword';
import EventCreate from 'app/screens/Events/create';
import SignUp from 'app/screens/SignUp';
import SignIn from 'app/screens/SignIn';
import EmailSignup from 'app/screens/EmailSignup';
import Clubsetup from 'app/screens/Clubsetup';

import MyWallet from 'app/screens/MyWallet';
import ViewExpense from 'app/screens/ViewExpense';
import AddTopup from 'app/screens/AddTopup';
import  Notification from 'app/screens/Notification';
import Chat from 'app/screens/Chat';
import Onboarding from 'app/screens/Onboarding';
import SingleChat from 'app/screens/SingleChat';
//import Club from 'app/screens/Login copy';
import ThemeController from '../components/ThemeController';
import LeftMenu from '../components/LeftMenu';
import { StatusBar } from 'react-native';
import { ILoginState } from 'app/models/reducers/login';
import TrainingSchedule from 'app/screens/TrainingSchedule';
import Applesignup from 'app/screens/Login/applesignup';
import Clubdetail from 'app/screens/Clubdetail';
import NewClub from 'app/screens/NewClub';
import SearchClub from 'app/screens/Searchclub';
import ManageClub from 'app/screens/ManageClub';
import CourtBooking from 'app/screens/CourtBooking';
import NewCourtBooking from 'app/screens/NewCourtBooking';
import StockManagement from 'app/screens/StockManagements';

import NewExpense from 'app/screens/NewExpense';
import SelectMembers from 'app/screens/SelectMembers';
import ManageMembers from 'app/screens/ManageMembers';
import MyClubLanding from 'app/screens/MyClubLanding';
import NewExpenses from 'app/screens/NewExpenses';
import ViewCourtBooking from 'app/screens/ViewCourtBooking';
import CreateNewExpense from 'app/screens/CreateNewExpense';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();


const homeOptions = {
  title: 'Home',
  headerRight: () => <ThemeController />,
  footerRight: () => <ThemeController />,
  headerLeft: () => <LeftMenu />,
};

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const AuthNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          headerShown:false,
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop'
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          // When logging out, a pop animation feel    fault 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          // When logging out, a pop animation feel    fault 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
      <Stack.Screen
        name="EmailSignup"
        component={EmailSignup}
        options={{
          // When logging out, a pop animation feel    fault 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          // When logging out, a pop animation feel    fault 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
 
       <Stack.Screen
        name="ViewExpense"
        component={ViewExpense}
        options={{
          // When logging out, a pop animation feel    fault 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
           <Stack.Screen
        name="AddTopup"
        component={AddTopup}
        options={{
          // When logging out, a pop animation feel    fault 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
       
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator>
    <Stack.Screen name="Home" component={Home} options={homeOptions} />
    <Stack.Screen name="NewEvent" component={EventCreate} options={{
                                                        title: 'NewEvent',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />
       
        <Stack.Screen name="SignUp" component={SignUp} options={{
                                                        title: 'SignUp',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />
         <Stack.Screen name="applesignup" component={Applesignup} options={{
                                                        title: 'Applesignup',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />
         <Stack.Screen name="TrainingSchedule" component={TrainingSchedule} options={{
                                                        title: 'TrainingSchedule',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />                                                
       <Stack.Screen name="AddTopup" component={AddTopup} options={{
                                                        title: 'AddTopup',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />
                                                                                                             
       <Stack.Screen name="Notification" component={Notification} options={{
                                                        title: 'Notification',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />
      <Stack.Screen name="Chat" component={Chat} options={{
                                                        title: 'Chat',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />       
     <Stack.Screen name="SingleChat" component={SingleChat} options={{
                                                        title: 'SingleChat',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />       
               
          <Stack.Screen name="NewClub" component={NewClub} options={{
                                                        title: 'NewClub',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />      
          <Stack.Screen name="Clubsetup" component={Clubsetup} options={{
                                                        title: 'Clubsetup',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />    
            <Stack.Screen name="Clubdetail" component={Clubdetail} options={{
                                                        title: 'Clubdetail',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} /> 
           <Stack.Screen name="Onboarding" component={Onboarding} options={{
                                                        title: 'Onboarding',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />  
                                                                                                                                                           
 <Stack.Screen name="SearchClub" component={SearchClub} options={{
                                                        title: 'SearchClub',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />
   <Stack.Screen name="ManageClub" component={ManageClub} options={{
                                                        title: 'ManageClub',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />
      <Stack.Screen name="CourtBooking" component={CourtBooking} options={{
                                                        title: 'CourtBooking',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />
         <Stack.Screen name="NewCourtBooking" component={NewCourtBooking} options={{
                                                        title: 'NewCourtBooking',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />
         <Stack.Screen name="StockManagement" component={StockManagement} options={{
                                                        title: 'StockManagement',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />
        <Stack.Screen name="MyClubLanding" component={MyClubLanding} options={{
                                                        title: 'MyClubLanding',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />                                               
        <Stack.Screen name="CreateNewExpense" component={CreateNewExpense} options={{
                                                        title: 'CreateNewExpense',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} /> 
        <Stack.Screen name="SelectMembers" component={SelectMembers} options={{
                                                        title: 'SelectMembers',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} /> 
         <Stack.Screen name="ManageMembers" component={ManageMembers} options={{
                                                        title: 'ManageMembers',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />  
        <Stack.Screen name="NewExpenses" component={NewExpenses} options={{
                                                        title: 'Select Members for the expense',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,}} />        
  
       <Stack.Screen name="ViewCourtBooking" component={ViewCourtBooking} options={{
                                                          title: 'ViewCourtBooking',
                                                          headerTitleStyle: {
                                                            fontWeight: 'bold',
                                                          },
                                                          headerRight: () => <ThemeController />,
                                                                      }} />                                                                                                    
  </LoggedInStack.Navigator>
);
  
const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  return (
      <Stack.Navigator headerMode="none">
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={LoggedInNavigator}
            options={homeOptions}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={AuthNavigator}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerRight: () => <ThemeController />,
            }}
          />
          
        )}
      </Stack.Navigator>
  );
};

export default App;
