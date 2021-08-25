import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topbarTitle:{
    fontFamily:'Roboto-Light'
  },
  cardimage: {
    width: 100,
    height:100,
    borderRadius:7,
  },
  card:{
    height:'100%'
  },
  newscard:{
marginBottom:50,
  },
  textdate:{
    fontSize:12,
    justifyContent: 'center',
    paddingTop:20,
   },
   listIons:{

   },
   textnews:{
     paddingBottom:30,
   },
    cardtitle:{
      margin:0,
      padding:0,
    },
    fab: {
      position: 'absolute',
      margin: 30,
      right: -20,
      bottom: -50,
      backgroundColor:'#FF8500',
      color:"#fff",
      width:50,
      height:50,
      padding:5
   
    },
    eventcardimg:{
    width:'100%',
    height:130, 
    marginBottom:20,
    borderRadius:4, 
    },
    mainTitle:{
      fontSize:16,
      paddingTop:20,
      fontFamily:'Roboto-Light'
    },
    subTitle:{
      fontSize:14,
      paddingTop:20,
      color:'#aaa',
      fontFamily:'Roboto-Light'
    },
    sidePadding:{
      paddingHorizontal:20,
      backgroundColor:'#fff',
    },
    upcoming:{
      fontSize:18,
      paddingTop:20,
      color:'#4d4d4d'
    },
    borderClass:{
      borderTopColor: "#ddd",
      borderRightColor: "#ddd",
      borderBottomColor: "#ddd",
      borderWidth: 1,
      borderLeftWidth:8,
      borderLeftColor: "#00BDF6",
      marginTop:20,
      borderRadius: 9,
      padding:10,
    },
    borderYellow:{
      borderLeftWidth:8,
      borderLeftColor: "#E75A1A",
    },
    borderGreen:{
      borderLeftWidth:8,
      borderLeftColor: "#58B012",
    },
    search:{
marginTop:20
    },
    clubs:{
      fontSize:20,
      paddingTop:20,
      fontWeight:'bold',
    },
    clubsShield:{marginTop:13,
      backgroundColor:'#2F4858',
    },
    ShieldOrange:{marginTop:13,
      backgroundColor:'#FF8500',
      color:'#fff',
    },
    borderClubs:{
      borderColor: "#ddd",
      borderWidth: 1,
      marginTop:20,
      borderRadius: 9,
      padding:10,
    },
    bookalt:{
      backgroundColor:'#FF8500',
      color:'#fff',
      borderRadius:50,
      width:40,
      height:40,
    },
    cardevent:{
      borderColor: "#ddd",
      borderWidth: 1,
      borderRadius: 9,
      padding:0,
      marginVertical:15,
    },
    searched:{
      backgroundColor:'#ccc',
      marginTop:20,
    },
    dropdownlist:{
      marginBottom:10,
    },
    borderbot:{
      borderColor: "#ddd",
      borderBottomWidth: 1,
      marginTop:0,
      borderRadius: 9,
      padding:10,
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
      shieldview:{
        backgroundColor:'#E75A1A',
        color:"#fff",
        borderRadius:50,
        width:45,
        height:45,
        fontSize:40,
        },
    shieldpink:{
      backgroundColor:"#EE16ED",
    },
    shieldyellow:{
      backgroundColor:"#FF9500",
    },
    shieldgreen:{
      backgroundColor:"#34C759",
      color:'#fff'
    },
    clubsShield:{marginTop:13,
      backgroundColor:'orange',
      marginRight:20
    },
    shadows:{
      padding:10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      elevation: 5 
    },
    rightvalue:{
      fontSize:10, 
      color:"#CF3918"
    },
    tooglecustom:{
      position:'absolute',
      top:-5,
      left:60
    },
    tooglecustomright:{
      position:'absolute',
      top:5,
      right:-50
    },
    bgnumber:{
      backgroundColor:'#E75333',
      borderRadius:7,
      marginRight:10,
  },  
  marginzero:{
    marginTop:0
  },
  submit:{
    color:'#fff',
    backgroundColor:"#CF3918",
    padding:10,
    fontSize:14,
    marginTop:20,
    borderRadius:10
}
    
});

export default styles;
