import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  fabs: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: -100,
    borderRadius:50,
    width:70,
    height:70,
    color:"#fff",
    padding:15,
    backgroundColor:"#E75A1A",
  },
  sidePadding:{
    position: 'relative',
    paddingHorizontal:20,
    backgroundColor:'#fff',
  },
  search:{
    marginTop:20,
    elevation: 0,
    borderBottomColor:'#ddd',
    borderBottomWidth:2,
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
  listLine:{
    borderBottomColor:"#ddd",
    borderBottomWidth:1,
    }

});

export default styles;
