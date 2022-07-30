

 import React, { useEffect, useState } from 'react';
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
   FlatList,
  
 
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
//  import Location from 'react-native-vector-icons/Ionicons';
//  import Noti from 'react-native-vector-icons/Ionicons';
//  import Icon from 'react-native-vector-icons/EvilIcons';
 import LinearGradient from 'react-native-linear-gradient';
 import Head from '../Screens/Components/Header'
//  import Map from './Map';
 
// {item.salonForWomenName}
// {item.price}
 
 
 const Salonforwomen = ({navigation}) => {
 
  const [subcategories, setsubcategories] = useState([]);

  const getsubcategoryData = async () =>{
      let url = 'http://3.109.48.115:5500/user/getsubcategories';
      axios.get(url)
          .then( (categories) => {
              setsubcategories(JSON.stringify(response.data));
              console.log(response.data)
          })
          .catch(function (error) {
          alert(error.message);
          })
  }

 useEffect(()=>{getsubcategoryData()},[])

  const categories = [
    {
      id: 1,
      title: 'Facial for glow',
      onemore: '₹599 onwords',
      // image: require('../assets/sone.png')
      // image: require{{categories.image}}
    },
    {
      id: 2,
      title: 'Manicure',
      onemore: '₹499 onwords',
      // image: require('../assets/stwo.png')
    },
    {
      id: 3,
      title: 'Pediure',
      onemore: '₹499 onwords',
      // image: require('../assets/sthree.png')
      // {categories.data.image}
    },
   //  {
   //    id: 4,
   //    title: 'Threading',
   //    onemore: '₹59 onwords',

   //    // title1:'ajdlfjdjfj',
   //    image: require('../assets/sfour.png')
   //  },

  ]

   return (
   <>
   <ScrollView>
     <View style={{marginHorizontal: 20 }}>
       <Head title="Salon for women" />
       <View style={{ marginTop: 20 }}>
 
       <FlatList
            style={{ height: 600 }}
            data={categories} 
            //  horizontal={true}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View style={{ alignContent: 'center', alignItems: 'center', width : 170, height : 235, marginBottom: 5}}>
                  <View style={{ borderRadius: 8, backgroundColor: '#FFFFFF', width : 150, height : 230}}>
                  <TouchableOpacity>
                    <Image
                     onPress={()=>navigation.navigate("Facialforglow")}
                     style={{ borderRadius: 12, width : 135, height : 170, margin: 8}}
                    source ={subcategories.image}
                   />
                    </TouchableOpacity>
                    
                      <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500' }}>{item.title}</Text>
                    
                    <Text style={{ fontSize: 14, textAlign: 'center', color: '#5E17EB', fontWeight: '400' }}>{item.onemore}</Text>
                  </View>
                </View>
              )

            }}
          />
       </View>
     </View>
     </ScrollView>
   </>
   )
 }
 export default Salonforwomen;

 //   console.log('1111',salonforwomen)

//   useEffect(() => {

//     const requestOptions = {     
//       method: 'GET',
//       redirect: 'follow'
//     };

//     fetch("http://3.109.48.115:5500/admin/salonForWomenList", requestOptions).then((result) => {
//       result.json().then((resp) => {
//         setcategories(resp)
//       })
//     })
//   }, []);
 
//   const handleCardItem = (key) => {
//     console.log('key', key);
//     const saloneForWomenId =  key
//     console.log('getIds',saloneForWomenId);

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//       "id": saloneForWomenId
//     });
//     console.log('2222222', raw);

//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow'
//     };

//     fetch("http://3.109.48.115:5500/admin/subSalonforWomenPost", requestOptions)
//     .then(response => response.json())
//     .then(success => {
//       const tokan = success.token; 
//       const requestOptions = {
//         method: 'GET',
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + `${tokan}`,
//       },
//         redirect: 'follow'
//     };

//     fetch("http://3.109.48.115:5500/admin/subSalonforWomenData", requestOptions).then((result) => {
//         result.json().then((resp) => {          
//         const data = resp.response.subSalonforWomen;
//         console.log('data',data);
//         if(data){
//           props.navigation.navigate("Facialforglow",{
//             userId : data
//           })
//         }
//         })
//     })
//     console.log('success',tokan)
//     })
//     .catch(error => console.log('error', error));
// }