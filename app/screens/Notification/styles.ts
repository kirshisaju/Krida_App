import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
 marginTop:180,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  login: {
    padding: 8,
    fontSize:30
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
  clr:{
    backgroundColor: "#eaeaea"
  },
  ir:{
    marginTop: 25,
    height:30,
    marginLeft:20,
    backgroundColor: "#eaeaea"

  },
  signin:{
    justifyContent: 'center',   
    marginBottom: 75,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  sidePadding:{
    paddingHorizontal:20,
    backgroundColor:'#fff',
  },
  close:{
    paddingLeft:0,
    marginLeft:0,
    fontSize:18, 
    fontWeight:'bold',
    color:"#000"
  },
  listLine:{
    borderBottomColor:"#ddd",
    borderBottomWidth:1,
    },
});

export default styles;
