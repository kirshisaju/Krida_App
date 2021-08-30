import LeftMenu from 'app/components/LeftMenu';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

  pagination_x: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imghig:{
    height:150,
    width:150
  },
  mttext:{
    marginTop:20,
    fontSize:16,
    textAlign:'left',
    fontWeight:'bold'
  },
  cardtitlepad:{
    paddingRight:30,
    
  },
  bgclr:{
    backgroundColor:'#CF3918',
    color:'white',
    width:'100%',
    borderRadius:7

  },
  borderClubs:{
    borderColor: "#ddd",
    borderWidth: 1,
    marginTop:20,
    borderRadius: 5,
    padding:8,
  },
  clubsShield:{marginTop:13,
    backgroundColor:'grey',
  },
  padbg:{
   marginLeft:20,
   marginRight:20,
   marginTop:60
  },
  clubsShields:{marginTop:13,
    backgroundColor:'orange',
height:40,
width:40,
textAlign:'center',
borderRadius: 20,

  },
  bgcont:{
    marginTop:50,
    backgroundColor:'#CF3918',
    borderRadius: 5,
    color:'white'
  },
  ir:{
    marginTop: 25,
    height:40,
    marginLeft:20,
    backgroundColor: "#ffffff",
    textAlign: 'center',color: "#61dafb",
  },
  navBarLeftButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 100,
    paddingLeft: 8
  },

  buttonText: {
  color:'black',
    fontSize: 12,
    position:'absolute',
    paddingTop:100,
   paddingLeft:12,
   textAlign:'center',

  },
  buttonText2: {
    color:'black',
      fontSize: 12,
      position:'absolute',
      paddingTop: 125,
      paddingLeft:10,
      textAlign:'center',
    },
    barbottom:{
borderTopWidth:1,
borderBottomColor:"#ccc",
marginTop:90,
    },
    sidePadding:{
      paddingHorizontal:20,
      backgroundColor:'#fff',
    },
  
    input: {
      margin: 3,
      height: 60,
      borderColor: 'black',
      borderWidth: 1,
  borderBottomColor:'white',
  borderEndColor:'black',
   },
   inputs: {
    margin: 3,
    height: 50,
    width:170,
    borderColor: '#fcfcfc',
    borderBottomWidth: 1,
    backgroundColor:"#fff"
  },
   inputsfull: {
    margin: 3,
    height: 50,
    borderColor: '#fcfcfc',
    borderBottomWidth: 1,
    backgroundColor:"#fff"
  },
   inputWrap: {
    borderColor: '#cccccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  inputdate: {
  fontSize: 14,
  marginBottom : -12,
  color: '#6a4595',
  },
  inputcvv: {
  fontSize: 14,
  marginBottom : -12,
  color: '#6a4595',
  },
   flex2:{
     flex:1
   },
   mb:{
     marginBottom:20
   },
   btn:{
     height:60,
     marginTop:4
   },
   backicon:{
     position:'absolute',
     marginLeft:280,
     marginTop:15
  
   },
   inputcou: {
    margin: 3,
    height: 50,
  
  
    width:73
    
  },
  inputpho: {
    margin: 3,
    height: 50,
  
   
    width:235
    
  },
  heightselect:{
    paddingTop:7
  },
  inputaddnew:{
    margin: 3,
    height: 45,
    borderColor: '#CF3918',
    borderWidth: 1,
    width:171,
    backgroundColor:'#fff',
    color:'#CF3918',
    paddingTop:4
  },
  
  inputdone:{
    margin: 3,
    height: 45,
    borderColor: '#CF3918',
    borderWidth: 1,
    width:140,
    backgroundColor:'#CF3918',
    color:'#fff',
    paddingTop:4
  },
  
});

export default styles;
