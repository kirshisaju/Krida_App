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
    width:150,  margin:10,padding:10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 15,  
    elevation: 5
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
    bgdone:{
      backgroundColor:'#CF3918',
      borderRadius:20},
});

export default styles;
