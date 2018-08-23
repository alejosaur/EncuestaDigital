import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import DatePicker from 'react-native-datepicker'
import DropdownMenu from 'react-native-dropdown-menu';


class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { textEncuestador: '' ,  textConsecutivo: '' ,date: new Date(), text:''};
  }

  render() {
    var data = [["C", "Java", "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
    return (
      <View style={styles.cuerpo} >
        <View style={styles.lateral}>
          <View style={styles.cuerpo} >

            <View style={styles.lateral}>
              <Text>
                Fecha:
              </Text>
              <TextInput
                style={styles.phantomtextbox}
                onChangeText={(text) => this.setState({text})}
                underlineColorAndroid={'transparent'}
                value={this.state.text}
              />
            </View>

            <View style={styles.lateral}>
              <Text>
                Encuestador:
              </Text>
              <TextInput
                style={styles.phantomtextbox}
                onChangeText={(text) => this.setState({text})}
                underlineColorAndroid={'transparent'}
                value={this.state.text}
              />
            </View>

            <View style={styles.lateral}>
              <Text>
                Consecutivo:
              </Text>
              <TextInput
                style={styles.phantomtextbox}
                onChangeText={(text) => this.setState({text})}
                underlineColorAndroid={'transparent'}
                value={this.state.text}
              />
            </View>

          </View>

          <View style={styles.cuerpo} >

            <DatePicker
              style={styles.datepicker}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2015-05-01"
              maxDate="2125-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              onDateChange={(date) => {this.setState({date: date})}}
            />

            <TextInput
              style={styles.textbox}
              onChangeText={(textEncuestador) => this.setState({textEncuestador})}
              underlineColorAndroid={'transparent'}
              value={this.state.textEncuestador}
            />

            <TextInput
              style={styles.textbox}
              onChangeText={(textConsecutivo) => this.setState({textConsecutivo})}
              underlineColorAndroid={'transparent'}
              value={this.state.textConsecutivo}
            />

          </View>
        </View>

        <View style={{flex: 1}}>
        <View style={{height: 64}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
 
          <View style={{flex: 1}}>
            <Text>
              {this.state.text} is the best language in the world
            </Text>
          </View>
 
        </DropdownMenu>
      </View>    	

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
    headerMode: 'none',
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  cuerpo: {
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lateral: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textbox: {
    height: 40,
    width: 160,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    textAlign: 'center'
  },
  datepicker: {
    height: 40,
    width: 160,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5
  },
  phantomtextbox: {
    height: 40,
    width: 0,
    borderColor: 'gray',
    borderWidth: 0,
    margin: 5
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
