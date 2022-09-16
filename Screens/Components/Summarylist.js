
 import React ,{useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   TextInput,
   TouchableOpacity,
   FlatList
 
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 
 import Plus from 'react-native-vector-icons/Entypo';
 import LinearGradient from 'react-native-linear-gradient';

import Star from 'react-native-vector-icons/AntDesign';
import tokan from '../tokan'
const Summarylist = (props) => {
  const {navigation, route} = props;
  const [num, setNum] = useState(0); 

  

  const postUser = serviceId => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: tokan,
        // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0Tm8iOiI3ODk4ODU4NjAxIiwidXNlcklkIjoiNjMxNmVjOGNlM2I4ZjY3ODFjZTkyMmMwIiwiaWF0IjoxNjYyOTkyMzkwLCJleHAiOjE2NjI5OTk1OTB9.c9pZQEzQ7R09k7rRyxconN8aBVkPHWVZkgbnQOsuJug',
      },
      body: JSON.stringify({
        serviceId,
      }),
    };

    fetch(
      // 'https://gorest.co.in/public/v1/users'
      'http://13.126.187.109:5500/user/addtocart',
      requestOptions,
    )
      .then(result => result.json())
      .then(resp => {
        // console.log('item advertise select', resp.result.serviceId);
        //   if (resp) {
        //     props.navigation.navigate("Sumary")}
      })
      .catch(error => {
        console.error(error);
      });
  };

   return (<>
    
     <View style={{ marginTop:20 }}>
     
 <FlatList
   style={{ height:250,position:'absolute',marginHorizontal:5}}
   data={props.dom}
    horizontal={true}
   renderItem={({ item }) => {
     return (
       <View style={{ alignContent: 'center', alignItems: 'center'}}>
         <View style={{ borderRadius: 12, padding: 20, margin: -10, backgroundColor: '#FFFFFF',height:300 }}>
           <Image
             style={{ borderRadius: 12, borderWidth: 0.5,width:140,height:120 }}
             source={{uri:item.image}}
           />


           <Text style={{ fontSize: 16,  color: '#161616', fontWeight: '500',top:10 }}>{item.name}</Text>
           <Text style={{ fontSize: 14,  color: '#5E17EB', fontWeight: '400',top:10 }}>₹ {item.price} onwards</Text>
           <TouchableOpacity  onPress={()=> [postUser(item._id), 
            console.log('advertise select', item.name),setNum(num+1)]}>
           <View style={{flexDirection:'row',borderRadius:20,top:20,justifyContent:'center',backgroundColor:'#5E17EB',padding:5}}>
             <Plus name='plus' size={20} color={'white'}  style={{textAlign:'center'}} />

               <Text style={{textAlign:'center',color:'white',fontSize:16}}>Add {num}</Text>
           </View>
           </TouchableOpacity>
         </View>

        
        


       </View>

       
     )

   }}



 />


</View>

   </>
   )
  
 }
 export default Summarylist;