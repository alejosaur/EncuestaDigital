import React from 'react';
import {AppRegistry, Button, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Picker } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import DatePicker from 'react-native-datepicker'
import DropdownMenu from 'react-native-dropdown-menu';


class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { textEncuestador: '' ,  textVisita: '' ,date: new Date()};
    }

    render() {

        return (
            <View style={styles.cuerpo} >
                <Text style={styles.header}>CONTROL DE LA ENCUESTA</Text>
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
                            format="DD-MM-YYYY"
                            minDate="01-01-2001"
                            maxDate="31-12-2200"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />

                        <TextInput
                            style={styles.textbox}
                            placeholder='N° de Visita'
                            onChangeText={(textVisita) => this.setState({textVisita})}
                            underlineColorAndroid={'transparent'}
                            value={this.state.textVisita}
                        />

                        <TextInput
                            style={styles.textbox}
                            placeholder='Registre el nombre del encuestador'
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
    	this.state = {menu:'', EG1:'',EG2:'', EG3:'', EG4:'', EG5:'', EG6:'' , EG7:'' , EG8:'' , EG8_1:'', EG9:''};
  	}

    render() {
        /* 2. Get the param, provide a fallback value if not available */
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');
        return (

            <View style={styles.cuerpo}>
                <ScrollView vertical={true}>
                    <Text>itemId: {JSON.stringify(itemId)}</Text>
                    <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                    <Button
                        title="Regresar"
                        onPress={() => this.props.navigation.goBack()}
                    />

                    <View style={{height: 64}} />

                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="React Native" value="lol no" />
                    </Picker>

                    <Text style = {styles.text}>{this.state.language}</Text>

                    <Text style={styles.header}>UBICACIÓN DE LA UNIDAD DE PRODUCCIÓN</Text>

                    <View style={styles.lateral}>
                        <View style={styles.cuerpo} >
                            <View style={styles.lateral}>
                                <Text>
                                1. Nombre del departamento:
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
                                2. Nombre del municipio:
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
                                3. Nombre del resguardo indígena:
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
                                4. Nombre del corregimiento, vereda o barrio:
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
                                5. Coordenadas obtenidas con el GPS:
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

                            <TextInput
                                style={styles.textbox}
                                placeholder='Registre el nombre del departamento'
                                onChangeText={(EG1) => this.setState({EG1})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG1}
                            />

                            <TextInput
                                style={styles.textbox}
                                placeholder='Registre el nombre del municipio'
                                onChangeText={(EG2) => this.setState({EG2})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG2}
                            />

                            <TextInput
                                style={styles.textbox}
                                placeholder='Registre el nombre del resguardo indígenar'
                                onChangeText={(EG3) => this.setState({EG3})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG3}
                            />

                            <TextInput
                                style={styles.textbox}
                                placeholder='Registre el nombre del corregimiento, vereda o barrio'
                                onChangeText={(EG4) => this.setState({EG4})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG4}
                            />

                            <TextInput
                                style={styles.textbox}
                                placeholder='Registre las coordenadas obtenidas con el GPS según el formato grados decimales: N:98,2346567 W:09,98546'
                                onChangeText={(EG5) => this.setState({EG5})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG5}
                            />

                        </View>
                    </View>

                    <Text style={styles.header}>INFORMACION DEL PRODUCTOR (ACUICULTOR / PESCADOR ARTESANAL)</Text>

                    <View style={styles.lateral}>
                        <View style={styles.cuerpo} >
                            <View style={styles.lateral}>
                                <Text>
                                6. ¿Cuál es su nombre?:
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
                                7. Número telefónico:
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
                                8. ¿Cuál es su tipo de documento de identidad?:
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
                                8.1. ¿Cuál es el número de su documento de identidad?:
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
                                9. ¿Pertenece usted a alguno de los siguientes grupos étnicos?:
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

                            <TextInput
                                style={styles.textbox}
                                placeholder='Registre el nombre del encuestado (Productor)'
                                onChangeText={(EG6) => this.setState({EG6})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG6}
                            />

                            <TextInput
                                style={styles.textbox}
                                placeholder='Registre el número telefónico'
                                onChangeText={(EG7) => this.setState({EG7})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG7}
                            />

                            <Picker
                                selectedValue={this.state.EG8}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG8: itemValue})}>
                                <Picker.Item label="Tarjeta de identidad" value="TI" />
                                <Picker.Item label="Cédula de ciudadanía" value="CC" />
                                <Picker.Item label="Cédula de extranjería" value="CE" />
                                <Picker.Item label="Visa de trabajo" value="VT" />
                            </Picker>

                            <TextInput
                                style={styles.textbox}
                                placeholder='Registre el número'
                                onChangeText={(EG8_1) => this.setState({EG8_1})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG8_1}
                            />

                            <Picker
                                selectedValue={this.state.EG9}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG9: itemValue})}>
                                <Picker.Item label="Afrocolombiano" value="TI" />
                                <Picker.Item label="Indígena" value="CC" />
                                <Picker.Item label="Mestizo" value="CE" />
                                <Picker.Item label="Otro ¿Cuál?" value="VT" />
                            </Picker>

                        </View>
                    </View>

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
    },
    header: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20,
        textAlign: 'center'
    }
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

AppRegistry.registerComponent('Example of ScrollView', () => App);
