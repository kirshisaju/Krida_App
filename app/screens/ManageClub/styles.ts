import LeftMenu from 'app/components/LeftMenu';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

topbarTitle:{
    fontFamily:'Roboto-Light'
},
fab: {
    backgroundColor:"#EC7961",
    color:"#fff",
    position: 'absolute',
    margin: 0,
    right: 10,
    bottom: 20,
    width:50,
    height:50,
    padding:5,
    zIndex:99899999,
}, 
customWid:{
    flex: 1, flexDirection: 'row',
    backgroundColor:'#F6F6F6',
    padding:20,
    marginTop:20,
    alignItems: "center",
    justifyContent: "center",
},
borderscore:{
    borderColor: "#ddd",
    borderWidth: 1,
    marginTop:20,
    borderRadius: 9,
},
search:{
    marginTop:0,
    elevation: 0,
    borderBottomColor:'#ddd',
    borderBottomWidth:2,
    },
fabs: {
    position: 'absolute',
    margin: 10,
    right: 0,
    bottom: -230,
    borderRadius:50,
    width:60,
    height:60,
    color:"#fff",
    padding:10,
    backgroundColor:"#E75A1A",
    },
});

export default styles;
