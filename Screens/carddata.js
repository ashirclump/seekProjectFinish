// import React, { useState } from 'react';
// import { SafeAreaView, View, Text, Button ,TouchableOpacity} from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// const App = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date(true));
//   const [date, setDate] = useState(true);

//   const showDatePicker = () => {
//     setDate(true);
//   };

//   const hideDatePicker = () => {
//     setDate(false);
//   };

//   const handleConfirm = (date) => {
//     setSelectedDate(date);
//     hideDatePicker();
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View
//         style={{
//           padding: 20,
//           flex: 1,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
//           {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
//         </Text>
//         <TouchableOpacity onPress={showDatePicker} style={{justifyContent:'center'
//         ,backgroundColor:'red'}}>
//           <Text style={{fontSize:40}}>Show TimePicker</Text></TouchableOpacity>
//         {/* <Button title="Select a date" onPress=/> */}
//         <DateTimePickerModal
//           date={selectedDate}
//           isVisible={date}
//           mode="Time"
//           onConfirm={handleConfirm}
//           onCancel={hideDatePicker}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// import React, { Component } from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';
// import DateTimePicker from 'react-native-modal-datetime-picker';

// export default class DateTimePickerTester extends Component {
//   state = {
//     isDateTimePickerVisible: true,
//   };

//   _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

//   _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

//   _handleDatePicked = (date) => {
//     console.log('A date has been picked: ', date);
//     this._hideDateTimePicker();
//   };

//   render () {
//     return (
//       <View style={{ flex: 1 }}>
//         <TouchableOpacity onPress={this._showDateTimePicker}>
//           <Text>Show TimePicker</Text>
//         </TouchableOpacity>
//         <DateTimePicker
//           isVisible={this.state.isDateTimePickerVisible}
//           onConfirm={this._handleDatePicked}
//           onCancel={this._hideDateTimePicker}
//         />
//       </View>
//     );
//   }

// }

// import React, { useState } from "react";
// import { Button, View } from "react-native";
// import DateTimePicker from "react-native-modal-datetime-picker";
// import { TouchableOpacity ,Text} from 'react-native';

// const Example = () => {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(true);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date) => {
//     console.warn("A date has been picked: ", date);
//     hideDatePicker();
//   };

//   return (
//     <View>
//       <TouchableOpacity onPress={showDatePicker} ><Text>fjhdsjfdsbh</Text></TouchableOpacity>
//       <DateTimePicker
//       modal
//         isVisible={isDatePickerVisible}
//         mode="time"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//     </View>
//   );
// };

// export default Example;

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import News from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';
import { TimePickerOptions } from '@react-native-community/datetimepicker';
const Sumary = () => {
  // const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const msg =
    'Free cancellation till 2hr before the booked\nslot,post that ₹50 chargeable';
  const booking = 'Booking Delayed\nby 20 mins';
  return (
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
            Select date and time
          </Text>
          <Text style={{color: 'rgba(117, 117, 117, 1)', lineHeight: 21}}>
            Your service will take approx.45 mins
          </Text>
          <View style={{marginTop: 50}}>
            
            <View>
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
            </View>
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
            <News name="newspaper-o" size={25} style={{right: 10, top: 10}} />
            <Text>{msg}</Text>
          </View>

          <View style={{ marginTop: 20}}>
         
            <View>
              <Text
                style={{fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
                {/* {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}-- */}
                {selectedDate
                  ? selectedDate.toLocaleTimeString()
                  : 'No date selected'}
              </Text>
              <TouchableOpacity onPress={() => setOpen(true)}  style={{
                borderRadius: 12,
                borderColor: 'rgba(94, 23, 235, 1)',
                borderWidth: 2,
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
                  select Time
                </Text>
              </TouchableOpacity>
              {/* <DateTimePicker/> */}
              {/* <TimePickerOptions/> */}
              <DatePicker
                modal
                open={open}
                date={selectedDate}
                onConfirm={time => {
                  setOpen(false);
                  setSelectedDate(time);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
          </View>

          <TouchableOpacity style={{
                borderRadius: 10,
                padding: 15,
                alignItems: 'center',
                backgroundColor: 'rgba(94, 23, 235, 1)',
                marginTop: 110,
              }}
            // onPress={() => navigation.navigate('SummaryFinal', {})}
            >
            
              <Text style={{color: 'white', fontWeight: '700'}}>
                Proceed to checkout
              </Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Sumary;

const styles = StyleSheet.create({});
