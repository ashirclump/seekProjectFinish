import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ActivityIndicator,
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
import LinearGradient from 'react-native-linear-gradient';
import CardRelated from '../Screens/Components/CardRelated';
import Header from '../Screens/Components/Header';

import Summarylist from '../Screens/Components/Summarylist';
import SelectTime from './SelectTime';
import Plus from 'react-native-vector-icons/Entypo';
import Check from 'react-native-vector-icons/AntDesign';
// import SelectTimeOne from './SelectTimeOne';
import Map from '../Screens/Map';
import tokan from '../Screens/tokan'
// import SelectTime from './SelectTimeThree';

const Sumary = props => {
  const {navigation, route} = props;

  const [Popup, setPopup] = useState(false);
  const [salonforwomen, setcategories] = useState([]);
 
  const [cart, setCart] = useState([]);


  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isLoading, setIsloading] = useState();
  const [Press, setPress] = useState([]);
  const [isFetching, setIsFetching] = useState(false);


  const toggle = () => {
    setChecked(!checked);
  };

  // const tokan='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0Tm8iOiIxMjM0NTY3ODkxIiwidXNlcklkIjoiNjMxYzg4N2RjOWUwMWY2MjE2M2FlZjAwIiwiaWF0IjoxNjYyOTcwMjY1LCJleHAiOjE2NjI5Nzc0NjV9.oCFImQ9KGmNaXqLKaY4jZVEGucAcHDX3ldKO9Wo_ab8';
  // const handleCardItem = (key) => {
  //   console.log('key', key);
  //   const saloneForWomenId = key
  //   console.log('getIds', saloneForWomenId);
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     "id": saloneForWomenId
  //   });
  //   console.log('2222222', raw);

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  // fetch("http://13.126.187.109:5500/user/addtocart", requestOptions)

  //   .then((result) => result.json())
  //   .then(result => {
  //     const tokan = result.token;
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: "Bearer " + `${tokan}`,
        Authorization: tokan,
        // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0Tm8iOiI3ODk4ODU4NjAxIiwidXNlcklkIjoiNjMxNmVjOGNlM2I4ZjY3ODFjZTkyMmMwIiwiaWF0IjoxNjYyOTkyMzkwLCJleHAiOjE2NjI5OTk1OTB9.c9pZQEzQ7R09k7rRyxconN8aBVkPHWVZkgbnQOsuJug',
      },
      redirect: 'follow',
    };

    fetch('http://13.126.187.109:5500/user/getcart'
    , requestOptions).then(
      result => {
        // console.log('get cart', resp.result);

        result.json().then(resp => {
          setcategories(resp);
          // setRefreshing(false);
        });
      },
    );
  }, []);





 
  const User = serviceId => {
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
      'http://13.126.187.109:5500/user/updatecart',
      requestOptions,
    )
      .then(cartDetails => cartDetails.json())
      .then(resp => {
        // console.log('unselect data', resp.cartDetails.serviceId)
          if (resp) {
             console.log('unselect data', resp.cartDetails.serviceId)}
        })
        .catch(error => {
          console.error(error);
      });
  };
  // const data = resp.response.subSalonforWomen;
  //           console.log('data', result);
  //           if (result) {
  //             props.navigation.navigate("Sumary", {
  //               userId: result
  //             })
  //           }
  //         })
  //       })
  //       console.log('success', result)
  //     })
  //     .catch(error => console.log('error', error));
  // }
  //   const [Popup, setPopup] = useState(false);

  return (
    <SafeAreaView style={{}}>
      <View style={{marginHorizontal: 10, backgroundColor: 'white'}}>
        <ScrollView>
          <Header title="Summary" navigation={navigation} />

          {/* <CardRelated  
    image={props.route.params.image}
            name={props.route.params.name}
            price={props.route.params.price}
            desc={props.route.params.des}
            id={props.route.params.id}
/> */}

          {/* <CardRelated
/> */}

          <View style={{marginTop: 20, marginHorizontal: 5}}>
            <View
              style={{borderRadius: 12, padding: 15, backgroundColor: 'white'}}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <FlatList
                  //  style={{ height:800 }}
                  data={salonforwomen.result}
                  //  horizontal={true}
                  //  numColumns={2}

                  // progressViewOffset={100}
                  // refreshControl={<RefreshControl isLoading={isLoading} />}
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          fontSize: 16,
                          backgroundColor: '#EBEBEB',
                          borderRadius: 12,
                          padding: 10,
                          marginBottom: 5,
                        }}>
                        <Text
                          style={{fontSize: 16, color: '#161616', margin: 10}}>
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
                          style={{alignItems: 'center', bottom: 10}}>
                          <View>
                            {/* <Text style={{ fontWeight: "bold" }}>{item.name}</Text> */}
                            {cart.includes(item) ? (
                              <Pressable
                                onPress={() => [
                                  setCart(cart.filter(x => x.id !== item.id)),
                                  setToggleCheckBox(false),
                              
                                  setPress(true),
                                ]}>
                                <Check
                                  name="check"
                                  size={30}
                                  color={'white'}
                                  style={{
                                    borderRadius: 12,
                                    width: 40,
                                    height: 40,
                                    left: 0,
                                    borderColor: 'gray',
                                    backgroundColor: 'green',
                                    borderWidth: 1,
                                    marginLeft: 220,
                                    padding: 5,
                                  }}
                                />
                              </Pressable>
                            ) : (
                              <Pressable
                                onPress={() => [
                                  setCart([...cart, item]),
                                  setToggleCheckBox(true),
                                  setPress(false),
                                  console.log('Remove items',item.serviceId.name),
                                  User(item._id),
                                ]}>
                                <Plus
                                  name="plus"
                                  size={30}
                                  color={'white'}
                                  style={{
                                    borderRadius: 12,
                                    width: 40,
                                    height: 40,
                                    borderColor: 'gray',
                                    backgroundColor: '#5E17EB',
                                    borderWidth: 1,
                                    marginLeft: 220,
                                    padding: 5,
                                  }}
                                />
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

          <Summarylist dom={salonforwomen.relatedServies} />
          <SafeAreaView>
            <View
              style={{
                marginTop: 260,
                padding: 10,
                borderRadius: 12,
                elevation: 10,
                backgroundColor: 'white',
              }}>
              <TouchableOpacity>
                <Text style={{fontSize: 16, color: '#161616'}}>
                  Payment
                  {/* {props.route.params.name} */}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#161616',
                  width: 125,
                }}></View>
              <Text style={{top: 15, fontWeight: '400'}}>Item Total</Text>
              <Text style={{left: 240}}>₹ {salonforwomen.totalPrice}</Text>
              <Text style={{top: 15, fontWeight: '400'}}>Item Discount</Text>
              <Text style={{left: 240, fontSize: 14, color: '#52B46B'}}>
                - {salonforwomen.discountedPrice}
              </Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity onPress={() => setPopup(true)}>
                  <View
                    style={{
                      borderRadius: 10,
                      padding: 10,
                      width: '112%',
                      right: 5,
                      backgroundColor: 'black',
                    }}>
                    <Text style={{textAlign: 'center', color: 'white'}}>
                      Secedule for later
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={()=>handleCardItem()}
                  onPress={() => setPopup(true)}>
                  <View
                    style={{
                      borderRadius: 10,
                      padding: 10,
                      width: '127%',
                      left: 15,
                      backgroundColor: 'rgba(94, 23, 235, 1)',
                      marginLeft: 10,
                    }}>
                    <Text style={{textAlign: 'center', color: 'white'}}>
                      Request Now
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={()=>setPopup(true)}>
  <View style={{borderRadius:10,padding:20,left:10,width:'50%',backgroundColor:'#5E17EB'}}>
      <Text style={{textAlign:'center',color:'white'}}>Request Now</Text>
  </View>
  </TouchableOpacity> */}
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
              {/* </SafeAreaView> */}
              <SelectTime
                visible={Popup}
                closeCallback={() => setPopup(false)}
                navigation={navigation}
                // image={route.params.image}
                // name={route.params.name}
                // price={route.params.price}
                // desc={route.params.des}
                // id={route.params.id}
              />
            </View>
          </SafeAreaView>
        </ScrollView>
        {/* </SafeAreaView> */}
      </View>
    </SafeAreaView>
  );
};
export default Sumary;
