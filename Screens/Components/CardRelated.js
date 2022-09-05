import React from 'react';
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
import Plus from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

import Star from 'react-native-vector-icons/AntDesign';

const HelloWorldApp = props => {
  const {navigation, route} = props;

  return (
    <>
      <View style={{marginTop: 20, marginHorizontal: 5}}>
        <View
          style={{borderRadius: 12, padding: 15, backgroundColor: '#EBEBEB'}}>
          <Text style={{fontSize: 16, color: '#161616'}}>
            Selected Services
          </Text>
          <View
            style={{borderWidth: 1, borderColor: '#161616', width: 125}}></View>
          <Image
            style={{width: 100, height: 77, borderRadius: 12, top: 20}}
            source={{uri: props.image}}
          />
          <Text
            style={{
              left: 120,
              fontSize: 16,
              color: '#161616',
              fontWeight: '500',
              top: -50,
            }}>
            {props.name}
          </Text>
          <Text
            style={{
              left: 120,
              fontSize: 16,
              color: '#5E17EB',
              fontWeight: '500',
              top: -45,
            }}>
            ₹ {props.price}



            {/* {props.desc} */}
          </Text>
          <Text
            style={{
              left: 120,
              fontSize: 16,
              color: '#757575',
              fontWeight: '500',
              top: -45,
            }}>
            {/* ₹ {props.price} */}


            {'\u2B24' + ' '}
            {props.desc}
          </Text>

          <FlatList
            //  style={{ height:800 }}
            data={props.id}
            //  horizontal={true}
            //  numColumns={2}
            renderItem={({item}) => {
              return (
                <View>
                  <Text
                    style={{fontSize: 14, color: '#757575', fontWeight: '400'}}>
                    {/* {'\u2B24' + ''} */}
                    {item.name}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};
export default HelloWorldApp;
