
import React from 'react';
import { View, Button } from 'react-native';
import notifee ,{AndroidStyle}from '@notifee/react-native';

// import notifee, {AndroidImportance} from '@notifee/react-native';
function Screen(props) {
    async function onDisplayNotification(props) {
        // Request permissions (required for iOS)
        await notifee.requestPermission()
    
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
          body: 'Custom sound',
        });
    // Display a notification
        await notifee.displayNotification({
          title: props.name +'<p style="color: #4caf50;"><b></span></p></b></p> &#128576;',
          body:  props.name + " is one of the best and most popular " + props.name,
          android: {
            channelId,
            style:{ type: AndroidStyle.BIGPICTURE, picture: props.image},
    
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
    

  return (
    <View>
      
    </View>
  );
}
export default Screen;