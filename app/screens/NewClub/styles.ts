import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {

   
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:
    50,
    paddingLeft:
    100
   
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
}
 
});

export default styles;
