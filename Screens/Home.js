import React, {useEffect, useState, Component} from 'react';
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
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Location from 'react-native-vector-icons/Ionicons';
import Noti from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
// import axios from 'react-native-axios';
// import { useEffect } from 'react/cjs/react.production.min';
import NextHM from './NextHM';
// import Sumary from '../Sumrryslot/Sumary';
import Map from './Map';
// import ChangeLocation from './ChangeLocation';
import axios from 'axios';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
// import { get } from 'react-native/Libraries/Utilities/PixelRatio';
// onPress={()=> handleCardItem (item._id)}

export default function Home({navigation}) {
  const [catagoryState, setcatagoryState] = useState(catagoryElements);

  useEffect(()=>{
    axios.get("http://3.109.48.115:5500/user/getCategories")
    .then(response=>{
      setcatagoryState(response.result)
      console.log(response.result)
      })
      .catch(function (error){ 
       console.log(error,)
       alert(error.result);
       })
  },[])

  
    // const [catagories, setcatagories] = useState(allcatagory);
    // const getcatagoryData = async () => {
    //   try {
    //     let response = await fetch(
    //       'http://3.109.48.115:5500/user/getCategories'
    //     );
    //     const json = await response.json();
    //     console.log(json.result)
    //     setcategories(json.result);
    //   } catch (error) {
    //     console.error(error);
  //   }

  //  useEffect(()=>{catagoryElements()},[])

   const catagoryElements = [
    {
      _id: 1,
      catagoryName: 'salonForWomen',
      // onemore: 'Women',
      image: require('../assets/swoman.png')
      
    },
    {
      _id: 2,
      catagoryName: 'tailor',
      image: require('../assets/tailor.png')
    },
    {
      _id: 3,
      catagoryName: 'Massage for Men',
      // onemore: '',
      image: require('../assets/mman.png')
    },
    {
      _id: 4,
      catagoryName: 'salonForMen',
      // onemore: 'Men',
      image: require('../assets/hsalon.png')
    },
    {
      _id: 5,
      catagoryName: 'Home Repairs',
      // onemore: '',
      image: require('../assets/hrepair.png')
    },
    {
      _id: 6,
      catagoryName: 'AC Repair Services',
      // onemore: ',
      image: require('../assets/acrepair.png')
    },

  ]

    return (
        <>
    <ScrollView>
          <View style={{marginHorizontal: 20, bottom: 22}}>
            <View
              style={{
                borderRadius: 15,
                width: '15%',
                alignItems: 'center',
                backgroundColor: '#F5C443',
                top: 50,
              }}>
              <Image source={require('../assets/user.png')} />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '800',
                  fontStyle: 'normal',
                  lineHeight: 19,
                  left: 60,
                  top: 8,
                  color: 'black',
                }}>
                Hi,Harry
              </Text>
              <Location
                name="ios-location"
                size={20}
                color={'black'}
                style={{left: 60, top: 8}}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 22,
                  left: 80,
                  bottom: 12,
                  color: '#161616',
                }}>
                Ayodhya Nagar,Bhopal
              </Text>
            </View>
            <TouchableOpacity>
              {/* onPress={() => navigation.navigate("HomeOneScroll")} */}
              <View
                style={{
                  borderRadius: 15,
                  left: 280,
                  width: '15%',
                  alignItems: 'center',
                  backgroundColor: '#F3F3F3',
                  bottom: 52,
                }}>
                <Noti
                  name="notifications"
                  color={'#5E17EB'}
                  size={30}
                  style={{marginTop: 5}}
                />
                <Image
                  style={{height: 8, width: 8, top: -35, left: 5}}
                  source={require('../assets/bindi.png')}
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 12,
                borderColor: '#E3E3E3',
                borderWidth: 1,
                top: -30,
              }}>
              <Icon
                name="search"
                color={'#757575'}
                size={30}
                style={{marginTop: 10}}
              />
  
              <TextInput
                placeholder="Search for services"
                style={{fontSize: 14}}></TextInput>
            </View>
            <LinearGradient
              colors={['#5E17EB', '#8C52FF']}
              style={{borderRadius: 20}}>
              <View
                style={{
                  borderRadius: 20,
                  alignContent: 'flex-end',
                  alignItems: 'flex-end',
                  padding: 10,
                }}>
                <Image
                  style={{top: 10, left: 10, borderBottomRightRadius: 10}}
                  source={require('../assets/jhaduwali.png')}
                //   {categories.data.image}
                
                />
              </View>
              <View style={{position: 'absolute', top: 30}}>
                <TouchableOpacity>
                  <View
                    style={{
                      borderRadius: 30,
                      alignItems: 'center',
                      padding: 5,
                      marginHorizontal: 20,
                      paddingHorizontal: 20,
                      backgroundColor: 'white',
                    }}>
                    <Text
                      style={{color: '#5E17EB', fontSize: 10, fontWeight: '700'}}>
                      NEW USER
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '400',
                    color: 'white',
                    left: 20,
                    top: 10,
                  }}>
                  Get Discount
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '400',
                    color: 'white',
                    left: 20,
                    top: 10,
                  }}>
                  Upto
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '400',
                    color: '#F5C443',
                    left: 75,
                    top: -20,
                  }}>
                  25%
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    color: '#FFFFFF',
                    top: -20,
                    left: 20,
                  }}>
                  For every cleaning services
                </Text>
              </View>
            </LinearGradient>
  
          
  
            <View style={{marginTop: 30}}>
              <Text style={{fontSize:20,color:'black',fontWeight:'700'}}>Categories</Text>
            <FlatList
            style={{ height: 350 }}
            keyExtractor = {item => item._id.toString()}  
            data={catagoryState}
            //  horizontal={true}
            numColumns={3}
            renderItem={({item}) => {
              return (
                <View style={{ alignContent: 'center', alignItems: 'center',top:30, width : 120, height : 180,}}>
                  <View style={{ borderRadius: 20, backgroundColor: '#FFFFFF', width : 110, height : 150,bottom:20,right:8}}>
                  <TouchableOpacity>
                    <Image
                     onPress={()=>navigation.navigate("Map")}
                     style={{ borderRadius: 20, width : 85, height : 85,top:5,alignSelf:'center',margin:8}}
                    source ={item.image}
                    // source = {{uri:item.image}}
                   />
                    </TouchableOpacity>
                    
                      <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500' }}>{item.catagoryName}</Text>
                    
                    {/* <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500' }}>{item.onemore}</Text> */}
                  </View>
                </View>
               )}}
                
          />
        </View>

            <View style={{top: 15}}>
              <NextHM />
            </View>
  
            {/* <SelectDate visible={Popup} closeCallback={()=>setPopup(false)} navigation={navigation} />   */}
          </View>
          <View style={{height:200}}>
            {/* <Text>{categories}</Text> */}
          
          </View>
        
          </ScrollView>
      </>
    )
  };
















// export class Home extends Component {
//     constructor()
//     {
//         super()
//         this.state={
//             data:[]
//         }
//     }
//     componentDidMount()
//     {
//       this.getcategoryData()  
//     }
//    async getcategoryData()
//     {
//         let resp = await axios.get('http://3.109.48.115:5500/user/getCategories')
//         console.warn(resp.data)
//         this.setState({data:resp.data})
//     }


//   render() {





// const Home = ({navigation}) => {
//   const [categories, setcategories] = useState([]);
//   const getRandomId = (min, max) => {
//     min = Math.ceil(min);

//     max = Math.floor(max);

//     return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
//   };

//   const CategoriesData = () => {
//     axios.get('http://3.109.48.115:5500/user/getCategories')
//     .then(response => {
//         setcategories(response.data);
//         console.log(CategoriesData.data)
//       });
//   };

//   const [Popup, setPopup] = useState(true);
//   const des =
//     'An OTP will be sent on given number for varification \n Standard message and data rates apply';
//   return (
//     <>
//       <ScrollView>
//         <View style={{marginHorizontal: 20, bottom: 22}}>
//           <View
//             style={{
//               borderRadius: 15,
//               width: '15%',
//               alignItems: 'center',
//               backgroundColor: '#F5C443',
//               top: 50,
//             }}>
//             <Image source={require('../assets/user.png')} />
//           </View>
//           <View>
//             <Text
//               style={{
//                 fontSize: 16,
//                 fontWeight: '800',
//                 fontStyle: 'normal',
//                 lineHeight: 19,
//                 left: 60,
//                 top: 8,
//                 color: 'black',
//               }}>
//               Hi,Harry
//             </Text>
//             <Location
//               name="ios-location"
//               size={20}
//               color={'black'}
//               style={{left: 60, top: 8}}
//             />
//             <Text
//               style={{
//                 fontSize: 12,
//                 fontStyle: 'normal',
//                 fontWeight: '400',
//                 lineHeight: 22,
//                 left: 80,
//                 bottom: 12,
//                 color: '#161616',
//               }}>
//               Ayodhya Nagar,Bhopal
//             </Text>
//           </View>
//           <TouchableOpacity>
//             {/* onPress={() => navigation.navigate("HomeOneScroll")} */}
//             <View
//               style={{
//                 borderRadius: 15,
//                 left: 280,
//                 width: '15%',
//                 alignItems: 'center',
//                 backgroundColor: '#F3F3F3',
//                 bottom: 52,
//               }}>
//               <Noti
//                 name="notifications"
//                 color={'#5E17EB'}
//                 size={30}
//                 style={{marginTop: 5}}
//               />
//               <Image
//                 style={{height: 8, width: 8, top: -35, left: 5}}
//                 source={require('../assets/bindi.png')}
//               />
//             </View>
//           </TouchableOpacity>
//           <View
//             style={{
//               flexDirection: 'row',
//               borderRadius: 12,
//               borderColor: '#E3E3E3',
//               borderWidth: 1,
//               top: -30,
//             }}>
//             <Icon
//               name="search"
//               color={'#757575'}
//               size={30}
//               style={{marginTop: 10}}
//             />

//             <TextInput
//               placeholder="Search for services"
//               style={{fontSize: 14}}></TextInput>
//           </View>
//           <LinearGradient
//             colors={['#5E17EB', '#8C52FF']}
//             style={{borderRadius: 20}}>
//             <View
//               style={{
//                 borderRadius: 20,
//                 alignContent: 'flex-end',
//                 alignItems: 'flex-end',
//                 padding: 10,
//               }}>
//               <Image
//                 style={{top: 10, left: 10, borderBottomRightRadius: 10}}
//                 source={require('../assets/jhaduwali.png')}
//               />
//             </View>
//             <View style={{position: 'absolute', top: 30}}>
//               <TouchableOpacity>
//                 <View
//                   style={{
//                     borderRadius: 30,
//                     alignItems: 'center',
//                     padding: 5,
//                     marginHorizontal: 20,
//                     paddingHorizontal: 20,
//                     backgroundColor: 'white',
//                   }}>
//                   <Text
//                     style={{color: '#5E17EB', fontSize: 10, fontWeight: '700'}}>
//                     NEW USER
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//               <Text
//                 style={{
//                   fontSize: 22,
//                   fontWeight: '400',
//                   color: 'white',
//                   left: 20,
//                   top: 10,
//                 }}>
//                 Get Discount
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 22,
//                   fontWeight: '400',
//                   color: 'white',
//                   left: 20,
//                   top: 10,
//                 }}>
//                 Upto
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 22,
//                   fontWeight: '400',
//                   color: '#F5C443',
//                   left: 75,
//                   top: -20,
//                 }}>
//                 25%
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 12,
//                   fontWeight: '400',
//                   color: '#FFFFFF',
//                   top: -20,
//                   left: 20,
//                 }}>
//                 For every cleaning services
//               </Text>
//             </View>
//           </LinearGradient>
//           <View style={{marginTop: 40}}>
//             <TouchableOpacity onPress={CategoriesData}>
//               {/* onPress={() => navigation.navigate("SelectedServices")} */}
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontWeight: '700',
//                   color: '#161616',
//                   bottom: 25,
//                 }}>
//                 Categories
//               </Text>
//             </TouchableOpacity>
//             <View
//               style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//               <TouchableOpacity onPress={() => navigation.navigate('Map')}>
//                 <View
//                   style={{
//                     backgroundColor: '#ffffff',
//                     borderRadius: 20,
//                     width: 102,
//                     height: 135,
//                   }}>
//                   <Image
//                     source={require('../assets/swoman.png')}
//                     style={{borderRadius: 20, left: 14, top: 10}}
//                   />
//                   <Text
//                     style={{fontSize: 14, top: 18, left: 19, color: 'black'}}>
//                     Salon for
//                   </Text>
//                   <Text
//                     style={{fontSize: 14, top: 16, left: 24, color: 'black'}}>
//                     Women
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <View
//                   style={{
//                     backgroundColor: '#ffffff',
//                     borderRadius: 20,
//                     width: 102,
//                     height: 135,
//                   }}>
//                   <Image
//                     source={require('../assets/tailor.png')}
//                     style={{borderRadius: 20, left: 14, top: 10}}
//                   />
//                   <Text
//                     style={{fontSize: 14, top: 18, left: 29, color: 'black'}}>
//                     Tailor
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <View
//                   style={{
//                     backgroundColor: '#ffffff',
//                     borderRadius: 20,
//                     width: 102,
//                     height: 135,
//                   }}>
//                   <Image
//                     source={require('../assets/mman.png')}
//                     style={{borderRadius: 20, left: 14, top: 10}}
//                   />
//                   <Text
//                     style={{fontSize: 14, top: 18, left: 14, color: 'black'}}>
//                     Massage for
//                   </Text>
//                   <Text
//                     style={{fontSize: 14, left: 35, top: 16, color: 'black'}}>
//                     Men
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>

//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 top: 25,
//               }}>
//               <TouchableOpacity>
//                 <View
//                   style={{
//                     backgroundColor: '#ffffff',
//                     borderRadius: 20,
//                     width: 102,
//                     height: 135,
//                   }}>
//                   <Image
//                     source={require('../assets/hsalon.png')}
//                     style={{borderRadius: 20, left: 14, top: 10}}
//                   />
//                   <Text
//                     style={{fontSize: 14, top: 18, left: 22, color: 'black'}}>
//                     Salon for
//                   </Text>
//                   <Text
//                     style={{fontSize: 14, top: 16, left: 35, color: 'black'}}>
//                     men
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <View
//                   style={{
//                     backgroundColor: '#ffffff',
//                     borderRadius: 20,
//                     width: 102,
//                     height: 135,
//                   }}>
//                   <Image
//                     source={require('../assets/hrepair.png')}
//                     style={{borderRadius: 20, left: 14, top: 10}}
//                   />
//                   <Text
//                     style={{fontSize: 14, top: 18, left: 27, color: 'black'}}>
//                     {' '}
//                     Home
//                   </Text>
//                   <Text
//                     style={{fontSize: 14, top: 15, left: 27, color: 'black'}}>
//                     Repairs
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <View
//                   style={{
//                     backgroundColor: '#ffffff',
//                     borderRadius: 20,
//                     width: 102,
//                     height: 135,
//                   }}>
//                   <Image
//                     source={require('../assets/acrepair.png')}
//                     style={{borderRadius: 20, right: 5, left: 14, top: 10}}
//                   />
//                   <Text
//                     style={{fontSize: 14, top: 18, left: 18, color: 'black'}}>
//                     AC Service
//                   </Text>
//                   <Text
//                     style={{fontSize: 14, top: 15, left: 20, color: 'black'}}>
//                     & Repairs
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View></View>
//           <View style={{top: 15}}>
//             <NextHM />
//           </View>

//           {/* <SelectDate visible={Popup} closeCallback={()=>setPopup(false)} navigation={navigation} />   */}
//         </View>
//       </ScrollView>
//     </>
//   );
// };
// export default Home;

// const [categories, setcategories] = useState([]);
// useEffect(() => {
//     const requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//     };

//     fetch("http://3.109.48.115:5500/user/getCategories", requestOptions).then((result) => {
//         result.json().then((resp) => {
//             setcategories(resp)
//         })
//     })
//     console.log(categories.allCatagoryList)
// }, []);

// useEffect(() => {
//     fetch("http://3.109.48.115:5500/admin/catagoryList").then(response => response.json()).then((categories) => setcategories(categories));
//     console.log(categories.allCatagoryList)

//         const requestOptions =  {
//                 method: 'GET',
//                 redirect: 'follow'
//               };

//               fetch("http://3.109.48.115:5500/admin/catagoryList", requestOptions)
//             .then(response => response.json())
//             .then(categories=> console.log(categories))
//             .catch(error => console.log('error', error));]
//             fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
// }, []);

//     axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// const requestOptions =  {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   fetch("http://3.109.48.115:5500/admin/catagoryList", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// const categories = [
//     {
//         id: 1,
//         title: 'Salon for Women',

//     },
//     {
//         id: 2,
//         title: 'Talior',
//         image: require('../assets/tailor.png')
//     },
//     {
//         id: 3,
//         title: 'Massage for Men',
//         image: require('../assets/mman.png')
//     },
//     {
//         id: 4,
//         title: 'Salon for Men',
//         // title1:'ajdlfjdjfj',
//         image: require('../assets/hsalon.png')
//     },
//     {
//         id: 5,
//         title: 'Home Repairs',
//         // title1:'ajdlfjdjfj',
//         image: require('../assets/hrepair.png')
//     },
//     {
//         id: 6,
//         title: 'AC Service & Repair',
//         // title1:'ajdlfjdjfj',
//         image: require('../assets/acrepair.png')
//     }

// const images = [
//     {
//       id: 1,
//       title:'Salon for Women'

//     },
//     {
//       id: 2,
//       name: 'Puppy',
//     },
//     {
//       id: 3,
//       name: 'Turtle',
//     },
//     {
//       id: 4,
//       name: 'Rabbit',
//     },
//     {
//       id: 5,
//       name: 'Cat ',
//     },
//     {
//       id: 6,
//       name: 'Kitten',
//     },

//   ];
