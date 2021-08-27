import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';


const styles = StyleSheet.create({
  input: {
    margin: 3,
    height: 55,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor:"#fff",
 },

 inputs: {
  margin: 3,
  height: 60,
  borderColor: 'black',
  borderWidth: 1,
  width:195
  
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
   marginLeft:300,
   marginTop:15

 },
 inputcou: {
  marginTop: 10,
  height: 50,
  width:"26%",
  backgroundColor:"#fff",
  borderWidth:1,
  borderColor:"#ccc"
},

inputaddnew:{
  margin: 3,
  height: 45,
  borderColor: '#CF3918',
  borderWidth: 1,
  width:500,
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
  color:'white',
  paddingTop:4
},

inputpho: {
  marginTop: 10,
  marginLeft:7,
  height: 50,
  width:"70%",
  backgroundColor:"#fff",
  borderWidth:1,
  borderColor:"#ccc"
},
heightselect:{
  paddingTop:7,
  

}

});

export default styles;
