/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Input,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  render() {
    let pic = {
      uri: 'https://78.media.tumblr.com/675279e95d6a8f8600499334590114d1/tumblr_inline_n74jdy9aV71sh0kmz.png'
    };

    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 110}}/>

        <TextInput
          style={styles.texts}
        //  onChange={this.setValue }
          placeholder="Write character's name shown above"
        />

        <Button type='submit' style={styles.sendButtons} onPress={() => verifyAnswer()} title='Send Answer' />

        <Text>Other Images:</Text>

        <FlatList
          let data={[
              {uri: 'https://www.yojackets.com/wp-content/uploads/2018/03/Avengers-Infinity-War-Captain-America-Jacket.jpg'},
              {uri: 'https://qph.fs.quoracdn.net/main-qimg-8204f08754b57c7635225ca63e7d74b3'},
              {uri: 'https://img.cinemablend.com/filter:scale/quill/7/e/1/1/d/0/7e11d044f8e4cfc889d64fb2fa85aeba5c55a98b.jpg?mw=600'},
              {uri: 'https://boygeniusreport.files.wordpress.com/2014/04/captain-america.jpg?quality=98&strip=all'},
              {uri: 'https://i.annihil.us/u/prod/marvel/i/mg/6/c0/57101f9e0fb98/landscape_xlarge.jpg'}

          ]}
          renderItem={({item}) => <Image source={item}  style={{width: 193, height: 110}}/>}//{item.uri}</Text>}
    //      renderItem={({item}) => <Text>fetch({item.uri})</Text>}



        />

      </View>

    );
  }
}


/*render() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit App.js
      </Text>
      <Text style={styles.instructions}>
        {instructions}
      </Text>

      <Text style={styles.doctor}>Doctor Who</Text>
    </View>
  );
}*/

answer = '';

function setValue (event) {
   this.setState({value: event.target.value});
}

function verifyAnswer(event) {
  alert('TO BE IMPLEMENTED YET!!');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  //  backgroundColor: '#F5FCFF',
    backgroundColor: 'orange',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    backgroundColor: 'yellow',
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },

  doctor: {
    textAlign: 'center',
    color: '#000',
    backgroundColor: 'yellow',

  },

  texts: {
  //  justfyContent: 'center',
    //flex: 1,
    flexDirection: 'row',
    //alignItems: 'stretch',
    textAlign: 'center',
    width: 300,
    height: 110,
  },

  sendButtons: {
    color: 'green',
  },

});
