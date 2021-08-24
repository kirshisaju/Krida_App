import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  slide1: {
    paddingLeft: 15,paddingRight: 15,
  },
  slide2: {
    paddingLeft: 15,paddingRight: 15,
  },
  slide3: {
    paddingLeft: 15,paddingRight: 15,
  },
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  wrapper: {
    backgroundColor: '#fff' 
  },
  nonepadding:{
    paddingLeft:0
  },
  grid:{
    marginTop:15
    },
    title:{
      marginBottom:10,textAlign: 'center',
      marginTop:60
    },
    text:{
      marginTop:30,textAlign: 'center',
      marginBottom:10,
    },
    inputtext:{
      marginBottom: 15,
      color:'red',
      backgroundColor: '#fff',
      borderBottomColor: '#fff'
    },
    borderbox :{width: '80%', height: 200,paddingLeft:50,},
    buttoncontinue:{
      marginLeft:60,
      marginRight:60
    },
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      color:"black"
    },
  
    underlineStyleHighLighted: {
      borderColor: "green",
    },
    container: {
  
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
        
       },
       terms:{

       },
       Prod:{
       marginTop:300,color:"#fff",fontSize:22,
       textAlign: 'center',
       

       },
       exte:{
        textAlign: 'center',color:"#fff",fontSize:18,marginTop:30,
       },
       enter:{
         textAlign:'right'
       }
});

export default styles;
