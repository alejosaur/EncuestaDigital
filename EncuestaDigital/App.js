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
                    <View style={styles.cuerpoP2} >

                        <Text>
                            Fecha:
                        </Text>
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

                        <Text>
                            No. de Visita:
                        </Text>
                        <TextInput
                            style={styles.textbox2}
                            multiline={true}
                            placeholder='Registre el número consecutivo de la visita durante la cual desarrolló la encuesta'
                            onChangeText={(textVisita) => this.setState({textVisita})}
                            underlineColorAndroid={'transparent'}
                            value={this.state.textVisita}
                        />

                        <Text>
                            Encuestador:
                        </Text>
                        <TextInput
                            style={styles.textbox1}
                            multiline={true}
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
    	this.state = {menu:'', EG1:'',EG2:'', EG3:'', EG4:'', EG5:'', EG6:'' , EG7:'' , EG8:'' , EG8_1:'', EG9:'',
                    EG10:'', EG11:'',EG12:'', EG13:'', EG14:'', EG15:'', EG15_1:'', EG16:'' , EG17:'' , EG18:'',
                    EG19:'', EG19_1:'', EG19_2:'', EG19_3:'', EG19_4:'', EG19_5:'', EG19_6:'', EG19_7:'', EG19_8:'',
                    EG20:''};
  	}

    render() {

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
                        <View style={styles.cuerpoP2} >
                            <Text>
                                1. Nombre del departamento:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                multiline={true}
                                placeholder='Registre el nombre del departamento'
                                onChangeText={(EG1) => this.setState({EG1})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG1}
                            />

                            <Text>
                                2. Nombre del municipio:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                multiline={true}
                                placeholder='Registre el nombre del municipio'
                                onChangeText={(EG2) => this.setState({EG2})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG2}
                            />

                            <Text>
                                3. Nombre del resguardo indígena:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                multiline={true}
                                placeholder='Registre el nombre del resguardo indígena'
                                onChangeText={(EG3) => this.setState({EG3})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG3}
                            />

                            <Text>
                                4. Nombre del corregimiento, vereda o barrio:
                            </Text>
                            <TextInput
                                style={styles.textbox2}
                                multiline={true}
                                placeholder='Registre el nombre del corregimiento, vereda o barrio'
                                onChangeText={(EG4) => this.setState({EG4})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG4}
                            />

                            <Text>
                                5. Coordenadas obtenidas con el GPS:
                            </Text>
                            <TextInput
                                style={styles.textbox2}
                                multiline={true}
                                placeholder='Registre las coordenadas obtenidas con el GPS según el formato grados decimales: N:98,2346567 W:09,98546'
                                onChangeText={(EG5) => this.setState({EG5})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG5}
                            />

                        </View>

                    </View>

                    <Text style={styles.header}>INFORMACION DEL PRODUCTOR (ACUICULTOR / PESCADOR ARTESANAL)</Text>

                    <View style={styles.lateral}>
                        <View style={styles.cuerpoP2} >

                            <Text>
                                6. ¿Cuál es su nombre?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                multiline={true}
                                placeholder='Registre el nombre del encuestado (Productor)'
                                onChangeText={(EG6) => this.setState({EG6})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG6}
                            />

                            <Text>
                                7. Número telefónico:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                multiline={true}
                                placeholder='Registre el número telefónico'
                                onChangeText={(EG7) => this.setState({EG7})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG7}
                            />

                            <Text>
                                8. ¿Cuál es su tipo de documento de identidad?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG8}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG8: itemValue})}>
                                <Picker.Item label="Tarjeta de identidad" value="TI" />
                                <Picker.Item label="Cédula de ciudadanía" value="CC" />
                                <Picker.Item label="Cédula de extranjería" value="CE" />
                                <Picker.Item label="Visa de trabajo" value="VT" />
                            </Picker>

                            <Text>
                                8.1. ¿Cuál es el número de su documento de identidad?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                multiline={true}
                                placeholder='Registre el número'
                                onChangeText={(EG8_1) => this.setState({EG8_1})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG8_1}
                            />

                            <Text>
                                9. ¿Pertenece usted a alguno de los siguientes grupos étnicos?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG9}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG9: itemValue})}>
                                <Picker.Item label="Afrocolombiano" value="TI" />
                                <Picker.Item label="Indígena" value="CC" />
                                <Picker.Item label="Mestizo" value="CE" />
                                <Picker.Item label="Otro ¿Cuál?" value="VT" />
                            </Picker>

                            <Text>
                                10. Edad del productor:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType = 'numeric'
                                placeholder='Registre la edad en valores numéricos'
                                onChangeText={(EG10) => this.setState({EG10})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG10}
                            />

                            <Text>
                                11. Género del productor:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG11}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG11: itemValue})}>
                                <Picker.Item label="Masculino" value="M" />
                                <Picker.Item label="Femenino" value="F" />
                            </Picker>

                            <Text>
                                12. ¿Hace cuántos años y/o meses  reside en la zona?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType = 'numeric'
                                placeholder='Registre el dato con valores numéricos'
                                onChangeText={(EG12) => this.setState({EG12})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG12}
                            />

                            <Text>
                                13. ¿Hace cuantos años y/o meses se dedica a esta actividad?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType = 'numeric'
                                placeholder='Registre el valor en años y meses'
                                onChangeText={(EG13) => this.setState({EG13})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG13}
                            />

                            <Text>
                                14. ¿Usted está organizado como persona natural o jurídica?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG14}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG14: itemValue})}>
                                <Picker.Item label="Natural" value="Natural" />
                                <Picker.Item label="Jurídica" value="Juridica" />
                            </Picker>

                            <Text>
                                15. ¿Ha sido víctima del desplazamiento forzado?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG15}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG15: itemValue})}>
                                <Picker.Item label="Sí" value="Si" />
                                <Picker.Item label="No" value="No" />
                            </Picker>

                            <Text>
                                15.1. ¿Cuál fue la causa del desplazamiento?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG15_1}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG15_1: itemValue})}>
                                <Picker.Item label="Conflicto armado" value="conflicto" />
                                <Picker.Item label="Ambiental" value="ambiental" />
                                <Picker.Item label="Económica" value="economica" />
                            </Picker>

                            <Text>
                                16. ¿Es usted desmovilizado de algún grupo armado?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG16}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG16: itemValue})}>
                                <Picker.Item label="Sí" value="Si" />
                                <Picker.Item label="No" value="No" />
                            </Picker>

                        </View>
                    </View>

                    <Text style={styles.header}>SITUACIÓN DEMOGRÁFICA Y SOCIAL DEL GRUPO FAMILIAR DEL PRODUCTOR</Text>
                    <Text style={styles.subheader}>Indique la composición de su grupo familiar bajo las siguientes preguntas</Text>

                    <View style={styles.lateral}>
                        <View style={styles.cuerpoP2} >
                            <Text>
                                17. ¿Cuántas personas componen su grupo familiar?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType = 'numeric'
                                placeholder='Registre el dato con valor numérico'
                                onChangeText={(EG17) => this.setState({EG17})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG17}
                            />

                            <Text>
                                18. ¿Quién es el /la jefe del hogar?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                multiline={true}
                                placeholder='Registre el nombre del jefe del hogar'
                                onChangeText={(EG18) => this.setState({EG18})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG18}
                            />

                            <Text>
                                19. Indique su nombre:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                multiline={true}
                                placeholder='Registre el nombre'
                                onChangeText={(EG19) => this.setState({EG19})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG19}
                            />

                            <Text>
                                19.1. ¿Cuál es su relación con el/la productor/a?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG19_1}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG19_1: itemValue})}>
                                <Picker.Item label="Cónyuge" value="Conyuge" />
                                <Picker.Item label="Hijo/a" value="Hijo/a" />
                                <Picker.Item label="Yerno / Nuera" value="Yerno/nuera" />
                                <Picker.Item label="Nieto/a, Bisnieto/a" value="Nieto/a, bisnieto/a" />
                                <Picker.Item label="Padre o madre del cónyuge" value="Padre o madre del cónyuge" />
                                <Picker.Item label="Otro pariente" value="Otro pariente" />
                                <Picker.Item label="Otro,  persona no emparentada (Amigo)" value="Otro,  persona no emparentada (Amigo)" />
                            </Picker>

                            <Text>
                                19.2. Género:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG19_2}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG19_2: itemValue})}>
                                <Picker.Item label="Hombre" value="H" />
                                <Picker.Item label="Mujer" value="M" />
                            </Picker>

                            <Text>
                                19.3. ¿Cuántos años tiene?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType = 'numeric'
                                placeholder='Registre el dato con valor numérico'
                                onChangeText={(EG19_3) => this.setState({EG19_3})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG19_3}
                            />

                            <Text>
                                19.4. ¿Cuál es su estado civil?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG19_4}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG19_4: itemValue})}>
                                <Picker.Item label="Soltero" value="Soltero" />
                                <Picker.Item label="Casado" value="Casado" />
                                <Picker.Item label="Unión Libre" value="Unión Libre" />
                                <Picker.Item label="Separado" value="Separado" />
                                <Picker.Item label="Divorciado" value="Divorciado" />
                                <Picker.Item label="Viudo" value="Viudo" />
                            </Picker>

                            <Text>
                                19.5. ¿Sabe leer y/o escribir?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG19_5}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG19_5: itemValue})}>
                                <Picker.Item label="Sí" value="Si" />
                                <Picker.Item label="No" value="No" />
                            </Picker>

                            <Text>
                                19.6. ¿Actualmente asiste a un centro educativo?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG19_6}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG19_6: itemValue})}>
                                <Picker.Item label="Sí" value="Si" />
                                <Picker.Item label="No" value="No" />
                            </Picker>

                            <Text>
                                19.7. ¿Cuál es el último grado de educación que estudio  y aprobó?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG19_7}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG19_7: itemValue})}>
                                <Picker.Item label="Básica primaria (1° a 5°grado)" value="BP" />
                                <Picker.Item label="Básica secundaria (6° a 9° grado)" value="BS" />
                                <Picker.Item label="Media  (10° a 11° grado)" value="M" />
                                <Picker.Item label="Técnico" value="Tico" />
                                <Picker.Item label="Técnologo" value="Tlogo" />
                                <Picker.Item label="Profesional pregrado" value="Pre" />
                                <Picker.Item label="Postgrado" value="Post" />
                                <Picker.Item label="Ninguno" value="N" />
                            </Picker>

                            <Text>
                                19.8. ¿Cuál es su profesión?:
                            </Text>
                            <TextInput
                                style={styles.textbox3}
                                multiline={true}
                                placeholder='Registre el tipo de profesión únicamente de las personas que aprobaron estudios Técnicos, Tecnológicos, Profesional pregrado, o Postgrados.'
                                onChangeText={(EG19_8) => this.setState({EG19_8})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG19_8}
                            />

                        </View>
                    </View>

                    <Text style={styles.header}>SITUACION LABORAL Y ECONÓMICA DEL GRUPO FAMILIAR DEL PRODUCTOR</Text>

                    <View style={styles.lateral}>
                        <View style={styles.cuerpoP2} >


                        </View>
                    </View>



                    <Button
                        title="Continuar"
                        onPress={() => {
                            /* 1. Navigate to the Encuesta UPAC route with params */
                            this.props.navigation.navigate('EUPAC', {

                            });
                        }}
                    />
                </ScrollView>
            </View>
        );
    }
}

class ThirdScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigation } = this.props;
        return (
          <View style={styles.cuerpo}>
              <ScrollView vertical={true}>
                  <Button
                      title="Regresar"
                      onPress={() => this.props.navigation.goBack()}
                  />
                <Text style={styles.header}>INFORMACION GENERAL DE LA UNIDAD DE PRODUCCION ACUICOLA UPAC</Text>
                  <View style={styles.lateral}>
                      <View style={styles.cuerpoP2} >


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
        EUPAC: ThirdScreen
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
    cuerpoP2: {
        margin: 10,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    lateral: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textbox1: {
        height: 40,
        width: '98%',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        textAlign: 'center'
    },
    textbox2: {
        height: 60,
        width: '98%',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        textAlign: 'center'
    },
    textbox3: {
        height: 80,
        width: '98%',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        textAlign: 'center'
    },
    datepicker: {
        height: 40,
        width: '98%',
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
    },
    subheader: {
        color: 'black',
        fontStyle: 'italic',
        fontSize: 15,
        padding: 15,
        textAlign: 'center'
    }
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

AppRegistry.registerComponent('Example of ScrollView', () => App);
