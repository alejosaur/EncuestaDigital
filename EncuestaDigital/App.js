import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import DatePicker from 'react-native-datepicker'

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2015-05-01"
          maxDate="2125-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: new date()})}}
      />

        <TextInput
          style={{height: 40, width: 120                                                                                                                                                                                                                                                                                                                                          , borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid={'transparent'}
          value={this.state.text}
        />
        <TextInput
          style={{height: 40, width: 120, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid={'transparent'}
          value={this.state.text}
        />
        <Button
          title="Continuar"
          onPress={() => {
            /* 1. Navigate to the Encuesta route with params */
            this.props.navigation.navigate('Encuesta', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class EncuestaScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Encuesta: EncuestaScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
