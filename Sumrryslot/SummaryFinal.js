import React ,{useState,useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
  SafeAreaView,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Location from 'react-native-vector-icons/Ionicons';
import Noti from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/EvilIcons';
import Plus from 'react-native-vector-icons/Entypo';
import Check from 'react-native-vector-icons/AntDesign';
import Minus from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import CardRelated from '../Screens/Components/CardRelated';
import Header from '../Screens/Components/Header';
import Head from '../Screens/Components/Head';
import Summarylist from '../Screens/Components/Summarylist';
import Home from 'react-native-vector-icons/AntDesign';
import Edit from 'react-native-vector-icons/Feather';
import Time from 'react-native-vector-icons/Ionicons';
import Salonforwomen from './../Screens/Salonforwomen';
import tokan from '../Screens/tokan'
import Notification from '../Sumrryslot/Notification';
import PushNotification from "react-native-push-notification";
import notifee,{AndroidStyle } from '@notifee/react-native';

const SummaryFinal = (props) => {
  const {navigation, route} = props;
  const [salonforwomen, setcategories] = useState([]);
  const [cart,setCart] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [Press, setPress] = useState([]);
  const [address, setAddress] = useState([]);
 
  async function onDisplayNotification(salonforwomen) {
    
    await notifee.requestPermission()

  
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      body: 'Custom sound',
    });
// Display a notification
    await notifee.displayNotification({
      title: salonforwomen.result[0].serviceId.name +'<p style="color: #4caf50;"><b></span></p></b></p> &#128576;',
      body:  salonforwomen.totalPrice + "rupees is one of the best and most popular " + salonforwomen.result.name,
      android: {
        channelId,
        style:{ type: AndroidStyle.BIGPICTURE, picture:  salonforwomen.result[0].serviceId.image},

        smallIcon: 'ic-launcher' ,// optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        sound: 'hollow',
        criticalVolume: 0.9,
        pressAction: {
          id: 'default',
        },
      },
    });
}




  
   
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: tokan ,
      },
      redirect: 'follow'
    };

    fetch(
      "http://13.126.187.109:5500/user/getcart",
     requestOptions,
     ).then((result) => {
      // console.log('get cart')
      result.json().then((resp) => {
        setcategories(resp);
      });

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: tokan,
             },
             redirect: 'follow',
      };
    
      fetch(
        // 'https://gorest.co.in/public/v1/users'
        "http://13.126.187.109:5500/user/address",
        requestOptions,
      )
        .then(data => data.json())
        .then(resp => {
         
          // console.log('address get', resp.data[0].address);
          setAddress(resp);
        //   if (resp) {
        //     props.navigation.navigate("SummaryFinal")}
        // })
        // .catch(error => {
        //   console.error(error);
        });     
    });
 

  const not=() => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: tokan,
           },
      body: JSON.stringify({
       "addressId":"63285c9ab5d5eef468145357",
    "selectedSlot":"2022-09-19T08:08:35.462+00:00"
      }),
    };

    fetch(
      // 'https://gorest.co.in/public/v1/users'
      "http://13.126.187.109:5500/user/order",
      requestOptions,
    )
      .then(data => data.json())
      .then(resp => {
        console.log('not', resp);
      
      });
  };

  useEffect(() => {
    getlist()
  }, []);
  const getlist = serviceId => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: tokan,
           },
      body: JSON.stringify({
        serviceId,
      }),
    };

    fetch(
      // 'https://gorest.co.in/public/v1/users'
      "http://13.126.187.109:5500/user/updatecart",
      requestOptions,
    )
      .then(cartDetails => cartDetails.json())
      .then(resp => {
        
        if (resp) {
          console.log('unselect final')}
        getlist(resp);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={{}}>
      <View style={{marginHorizontal: 10, backgroundColor: 'white'}}>
        <ScrollView>
          <Header title="SummaryFinal" navigation={navigation}/>
          <View
            style={{
              borderRadius: 12,
              borderColor: 'rgba(243, 243, 243, 1)',
              borderWidth: 1,
              padding: 20,
              marginTop: 20,
              bottom:10
            }}>
            <View style={{flexDirection: 'row',}}>
              <Home name="home" size={20} style={{left: 10}} />
              <Text style={{left: 20}}>Home</Text>
              <Edit name="edit-2" size={15} style={{left: 220}} />
            </View>

            <FlatList
               
                data={address.data}
              
                renderItem={({item}) => {
                  return (
            <Text style={{fontSize: 12, lineHeight: 18, left: 40}}>
              {item.address}
            </Text>
              );
            }}
          />
    





            <View style={{flexDirection: 'row'}}>
              <Time name="time-outline" size={20} style={{left: 10, top: 10}} />
              <Text style={{left: 20, fontSize: 16, top: 10,color:'black'}}>{props.route.params.date}--{props.route.params.time}</Text>
              <Edit name="edit-2" size={15} style={{left: 130, top: 5}} />
            </View>
          </View>

          <View style={{marginTop: 20, marginHorizontal: 5}}>
        <View
          style={{borderRadius: 12, padding: 15, backgroundColor: 'white',}}>

{
        isLoading ? <ActivityIndicator /> : (
  <FlatList
               
                data={salonforwomen.result}
              
                renderItem={({item}) => {
                  return (
                    <View style={{fontSize: 16, backgroundColor: '#EBEBEB',borderRadius: 12, padding: 10,marginBottom:5}}>
                      <Text style={{fontSize: 16, color: '#161616',margin:10}}>
                        Selected Services
                      </Text>
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#161616',
                          width: 125,
                        }}></View>
                      <Image
                        style={{
                          width: 100,
                          height: 77,
                          borderRadius: 12,
                          top: 0,
                        }} 
                       source={{uri: item.serviceId.image}}
                     
                      />
                      
                      <Text
                        style={{
                          left: 120,
                          fontSize: 16,
                          color: '#161616',
                          fontWeight: '500',
                          top: -50,
                        }}>
                         {item.serviceId.name}
                      </Text>
                      <Text
                        style={{
                          left: 120,
                          fontSize: 16,
                          color: '#5E17EB',
                          fontWeight: '500',
                          top: -45,
                        }}>
                        ₹{item.serviceId.price}
                      </Text>

                      <Text
                        style={{
                          fontSize: 14,
                          color: '#757575',
                          fontWeight: '400',
                        }}>
                        {'\u2B24' + ' '}
                        {item.serviceId.description}
                      </Text>
                      <Pressable
          key={item.id}
          style={{ alignItems: "center",bottom:10 }}
        >
          
          <View>
            {/* <Text style={{ fontWeight: "bold" }}>{item.name}</Text> */}
            {cart.includes(item) ? (
               <Pressable onPress={() => [setCart(cart.filter((x) => x.id !== item.id)),setToggleCheckBox(false),
                setPress(true)]}>
                <Minus name='minus' size={30} color={'white'}  style={{ borderRadius: 12, width: 40, height: 40,borderColor: "gray",
                backgroundColor:'red',
                borderWidth: 1,
                marginLeft:220,
                padding: 5,}}  />
             </Pressable>
            ):(
              <Pressable onPress={() => [setCart([...cart,item]),setToggleCheckBox(true),
              setPress(false),console.log('Remove fianl',item.serviceId.name),getlist(item._id),]}>
             
                   <Minus name='minus' size={30} color={'white'} style={{ borderRadius: 12, width: 40, height: 40, left:0,  borderColor: "gray",
                   backgroundColor:'red',
                   borderWidth: 1,
                   marginLeft:220,
                   padding: 5, }}/>

            </Pressable>
            )}
           
          </View>
        </Pressable>


        
                    </View>



                  );
                }}
              />
        )}
          </View>
        
          </View>
{/* <CardRelated 
// image={props.route.params.image}
            // name={props.name}
//             price={props.route.params.price}
            /> */}
           <Summarylist dom={salonforwomen.relatedServies}/>
         
<SafeAreaView>
          <View
            style={{
              marginTop: 260,
              padding: 1,
              borderRadius: 12,
              elevation: 10,
              backgroundColor: 'white',
            }}>
            <TouchableOpacity 
            // onPress={() => navigation.navigate('AddMoney')}
            >
              <Text style={{fontSize: 16, color: '#161616'}}>
                Payment Sumary
              </Text>
            </TouchableOpacity>

            <View
              style={{
                borderWidth: 1,
                borderColor: '#161616',
                width: 100,
              }}></View>
            <Text style={{top: 15, fontWeight: '400'}}>Item Total</Text>
            <Text style={{left: 290}}>₹ {salonforwomen.totalPrice}
            </Text>
            <Text style={{top: 15, fontWeight: '400'}}>Item Discount</Text>
            <Text style={{left: 290, fontSize: 14, color: '#52B46B'}}>
              - ₹ {salonforwomen.discountedPrice}
            </Text>
            <Text style={{top: 10, fontWeight: '400'}}>Convinience Fee</Text>
            <Text style={{left: 300, fontSize: 14}}>₹50</Text>
            <Text style={{top: 10, fontWeight: '700'}}>Grand Total</Text>
            <Text style={{left: 290, fontSize: 14, fontWeight: '700'}}>
              ₹ {salonforwomen.totalPrice}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              
              <TouchableOpacity onPress={() => [navigation.navigate('AddMoney')
              ,onDisplayNotification(salonforwomen),not()]}                   
              style={{
                    borderRadius: 10,
                    padding: 15,
                    backgroundColor: 'rgba(94, 23, 235, 1)',
                    width: 330,
                    right: 2,
                  }}>
                
                  <Text style={{textAlign: 'center', color: 'white'}}>
                    Pay ₹ {salonforwomen.totalPrice}
                  </Text>
                
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderRadius: 6,
                backgroundColor: 'rgba(82, 180, 107, 0.2)',
                padding: 5,
                marginTop: 20,
              }}>
              <Text
                style={{textAlign: 'center', color: '#52B46B', fontSize: 12}}>
                Hurray ! you have saved ₹50 on final bill
              </Text>
            </View>
          </View>
          </SafeAreaView>
        </ScrollView>
        
      </View>
      </SafeAreaView>
  );
};
export default SummaryFinal;
