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
  schedule:{
    fontSize:18,
    paddingTop:20,

    fontWeight:'bold'
  },
  search:{
    marginBottom:20,
    elevation: 0,
    borderBottomColor:'#ddd',
    borderBottomWidth:2,
    },
  listLine:{
    borderBottomColor:"#ddd",
    borderBottomWidth:1,
    },
    shield:{
      backgroundColor:'#E75A1A',
      color:"#fff",
      borderRadius:50,
      marginTop:10,
      width:45,
      height:45,
      fontSize:40,
      },
    shieldpink:{
      backgroundColor:"#EE16ED",
    },
    shieldgreen:{
      backgroundColor:"#58B012", 
      color:'#fff',
    },


});

export default styles;
