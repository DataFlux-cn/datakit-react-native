import * as React from 'react';
import { View, Alert, Platform } from 'react-native';
import { WebView } from 'react-native-webview';


class LocalWebViewScreen extends React.Component {
      static options() {
            return {
                  topBar: {
                        title: {
                              text: "WebView"
                        }
                  }
            };
      }
      render() {
            return (
                  <View style = {{ flex: 1 }}>
                   <WebView
                   originWhitelist={['*']}
                   scalesPageToFit={false}
                   useWebKit={true}
                   javaScriptEnabled
                   source={Platform.OS === 'android' ? { uri: 'file:///android_asset/test_webview.html' }:require('./test_webview.html')}
                   onMessage={this.onWebViewMessage}/>
                  </View>
                );
      }
      onWebViewMessage = (event:any) => {
         let message = event.nativeEvent.data
          Alert.alert(message, '', [{
                text: 'OK',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
          }
          ]);
       }
}
export default LocalWebViewScreen;
