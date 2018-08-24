import React from 'react';
import {AppRegistry, Button, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import DatePicker from 'react-native-datepicker'
import DropdownMenu from 'react-native-dropdown-menu';


class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { textEncuestador: 'Registre el nombre del encuestador' ,  textVisita: '' ,date: new Date()};
  }

  render() {
    
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
                No. de Visita:
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
              onChangeText={(textVisita) => this.setState({textVisita})}
              underlineColorAndroid={'transparent'}
              value={this.state.textVisita}
            />

            <TextInput
              style={styles.textbox}
              onChangeText={(textEncuestador) => this.setState({textEncuestador})}
              underlineColorAndroid={'transparent'}
              value={this.state.textEncuestador}
            />

          </View>
        </View>
   

        <Button
          title="Continuar"
          onPress={() => {
            /* 1. Navigate to the Encuesta route with params */
            this.props.navigation.navigate('Encuesta', {
              itemId: 86,
              otherParam: this.state.textEncuestador,
            });
          }}
        />

      </View>

    );
  }
}

class EncuestaScreen extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = { menu:''};
  	}

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    var data = [["C", "Java", "JavaScript", "PHP", "Python", "Ruby", "Swift", "Objective-C"]];
    return (
    
      <View style={styles.cuerpo}>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        /> 

        <View style={{flex: 1}}>
        <View style={{height: 64}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          handler={(selection, row) => this.setState({menu: data[selection][row]})}
          data={data}
        >
 
          <View style={{flex: 1}}>
            <Text>
              {this.state.menu} is the best language in the world
            </Text>
          </View>
 
        </DropdownMenu>
      </View>

        <ScrollView vertical={true}>
            <Text
                style={
                    {
                        fontSize: 30,
                        padding: 20,
                        backgroundColor: "red"
                    }
                }>
                This is a text in a scrollView
            </Text>
            <Text
                style={
                    {
                        fontSize: 30,
                        padding: 20,
                        backgroundColor: "green"
                    }
                }>
                This is second line
            </Text>
            <Text
                style={
                    {
                        fontSize: 30,
                        padding: 20,
                        backgroundColor: "yellow"
                    }
                }>
                This is 3rd line
            </Text>
            <Text
                style={
                    {
                        fontSize: 30,
                        padding: 20,
                        backgroundColor: "red"
                    }
                }>
                This is a text in a scrollView
            </Text>
            <Text
                style={
                    {
                        fontSize: 30,
                        padding: 20,
                        backgroundColor: "green"
                    }
                }>
                This is second line
            </Text>
            <Text
                style={
                    {
                        fontSize: 30,
                        padding: 20,
                        backgroundColor: "yellow"
                    }
                }>
                This is 3rd line
            </Text>
            <Text
                style={
                    {
                        fontSize: 30,
                        padding: 20,
                        backgroundColor: "red"
                    }
                }>
                This is a text in a scrollView
            </Text>
            <Text
                style={
                    {
                        fontSize: 30,
                        padding: 20,
                        backgroundColor: "green"
                    }
                }>
                This is second line
            </Text>
            <Text
                style={
                    {
                        fontSize: 30,
                        padding: 20,
                        backgroundColor: "yellow"
                    }
                }>
                This is 3rd line
            </Text>
        </ScrollView>

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

AppRegistry.registerComponent('Example of ScrollView', () => App);