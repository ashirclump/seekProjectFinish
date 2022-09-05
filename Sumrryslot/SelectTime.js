/* eslint-disable react-native/no-inline-styles */
import React ,{useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';
import Plus from 'react-native-vector-icons/AntDesign';
import News from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker'
import { TimePickerOptions } from '@react-native-community/datetimepicker';
// import SummaryFinal from './SummaryFinal';
// import { DateTimePicker } from 'react-native-modal-datetime-picker';
// import { TimePicker } from 'react-native-date-picker';
//     {
//         key1:'6:30' ,
//         key2:'7:30' ,
//         key3:'8:30' ,

//     },
// ];

const SelectTime = (props) => {
  const {
    visible,
    closeCallback,
    shareOptionCallback,
    navigation,
    route
  }=props;
  const msg =
    'Free cancellation till 2hr before the booked\nslot,post that ₹50 chargeable';
  const booking = 'Booking Delayed\nby 20 mins';
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  return (
    <SafeAreaView style={{margin:2}}>
    <Modal
      isVisible={visible}
      statusBarTranslucent
      transparent
      onBackdropPress={closeCallback}
      onBackButtonPress={closeCallback}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'android' ? undefined : 'position'}
        keyboardShouldPersistTaps="handled">
        <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
          <View
            style={{
              height: 'auto',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                height: 650,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}>
              <View style={{marginHorizontal: 20}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: '500',
                    marginTop: 60,
                  }}>
                  Select date and time{props.name}
                </Text>
                <Text style={{color: 'rgba(117, 117, 117, 1)', lineHeight: 21}}>
                  Your service will take approx.45 mins
                </Text>


                <View style={{marginTop: 50}}>
                {/* <View> */}
              <Text
                style={{fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
                {selectedDate
                  ? selectedDate.toLocaleDateString()
                  : 'No date selected'}
                {/* {selectedDate ? selectedDate.toLocaleTimeString() : 'No date selected'} */}
              </Text>
              <TouchableOpacity onPress={() => setOpen(true)}  style={{
                borderRadius: 12,
                borderColor: 'rgba(94, 23, 235, 1)',
                borderWidth: 1,
                padding: 15,
                backgroundColor: 'rgba(242, 236, 253, 1)',
              }}>
                <Text
                  style={{
                    // justifyContent: 'center',
                    // backgroundColor: 'red',
                  
                    color: 'black',
                  fontWeight: '700',
                  textAlign: 'center',
                  }}>
                  select Date
                </Text>
              </TouchableOpacity>
              <DatePicker
                modal
                open={open}
                date={selectedDate}
                onConfirm={date => {
                  setOpen(false);
                  setSelectedDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            {/* </View> */}
          {/* </View> */}

                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: 10,
                    justifyContent: 'center',
                    padding: 10,
                    backgroundColor: 'rgba(235, 235, 235, 1)',
                    marginTop: 50,
                  }}>
                  <News
                    name="newspaper-o"
                    size={25}
                    style={{right: 10, top: 10}}
                  />
                  <Text>{msg}</Text>
                </View>

                <View style={{marginTop: 20}}>
                <View>
              <Text
                style={{fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
                {selectedDate
                  ? selectedDate.toLocaleTimeString()
                  : 'No date selected'}
                {/* {selectedDate ? selectedDate.toLocaleTimeString() : 'No date selected'} */}
              </Text>
              <TouchableOpacity onPress={() => setOpen(true)}  style={{
                borderRadius: 12,
                borderColor: 'rgba(94, 23, 235, 1)',
                borderWidth: 1,
                padding: 15,
                backgroundColor: 'rgba(242, 236, 253, 1)',
              }}>
                <Text
                  style={{
                    // justifyContent: 'center',
                    // backgroundColor: 'red',
                  
                    color: 'black',
                  fontWeight: '700',
                  textAlign: 'center',
                  }}>
                  select Date
                </Text>
              </TouchableOpacity>
              <DatePicker
                modal
                open={open}
                date={selectedDate}
                onConfirm={date => {
                  setOpen(false);
                  setSelectedDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
          </View>


                <TouchableOpacity
                  onPress={() => navigation.navigate('SummaryFinal', {
                    // id:item.result,
                  // image: item.image,
                  named: route.params.name,
                  // price: item.price,
                  // des:item.description
                }
                  )}>
                  <View
                    style={{
                      borderRadius: 10,
                      padding: 15,
                      alignItems: 'center',
                      backgroundColor: 'rgba(94, 23, 235, 1)',
                      // marginTop: 150,
                    }}>
                    <Text style={{color: 'white', fontWeight: '700'}}>
                      Proceed to checkout
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
    </SafeAreaView>
  );
};
export default SelectTime;

