import { forFade } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  login: {
    padding: 8,
    fontSize:30,
    marginTop:50,
    marginBottom:100
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
  clr:{
    backgroundColor: "#eaeaea",
    marginTop:10,
    
  },
  appleclr:{
    backgroundColor: "white",
    marginTop:30,
    fontSize:20,
    width:300,
    height:50,
    marginLeft:10,
    fontFamily:"RobotoLight"
  },
  ir:{
    marginTop: 20,
    height:40,
    marginLeft:20,
    backgroundColor: "#ffffff",
    textAlign: 'center',color: "#61dafb",
  },
  face:{
    color: "red",
  },
  signin:{
    justifyContent: 'center',   

    color: '#fff',
    fontSize:15
  
  },
  iconbt:{
    color:'blue'
  },
  signins:{
    justifyContent: 'center', 
    fontSize:20  

  },
  signinbtn:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize:17  
  },
  tinyLogo: {
    width: 148,
    height: 163,
  },
  btn:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    
    width:50,
    height:50,
    color:'blue',
    borderRadius:6,
    fontSize:30
  }
});

export default styles;
