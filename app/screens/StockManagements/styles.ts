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
  borderClubs:{
    borderColor: "#ddd",
    borderWidth: 1,
    marginTop:20,
    borderRadius: 9,
    padding:10,
  },
  sidePadding:{
    paddingHorizontal:15,
    backgroundColor:'#fff',
 
  },
  shawd:{
    width:120,  margin:10,padding:10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 20,  
    elevation: 5
    },
    fab: {
      backgroundColor:"#EC7961",
      color:"#fff",
      position: 'absolute',
      margin: 0,
      right: 10,
      bottom: -55,
      width:50,
      height:50,
      padding:5,
      zIndex:99899999,
      
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
    },
 
});

export default styles;
