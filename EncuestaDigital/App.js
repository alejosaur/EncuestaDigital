import React from 'react';
import {AppRegistry, Button, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Picker } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import DatePicker from 'react-native-datepicker';

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
                    EG10:'', EG11:'',EG12:'', EG13:'', EG14:'', EG15:'', EG15_1:'', EG16:'' , EG17:'' , EG18:'', EG19:'', EG19_1:'',
                    EG19_2:'', EG19_3:'', EG19_4:'', EG19_5:'', EG19_6:'', EG19_7:'', EG19_8:'', EG20:'', EG20_1:'', EG20_2:'', EG20_3:'',
                    EG21:'', EG21_1:'', EG22:'', EG23:'', EG24:'', EG25:'', EG26:'' , EG27:'' };
    }

    render() {

        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');
        const { selectedItems } = this.state;
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

                            <Text style={styles.header}>INFORMACION DEL PRODUCTOR (ACUICULTOR / PESCADOR ARTESANAL)</Text>

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
                                keyboardType='numeric'
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
                                keyboardType='numeric'
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

                            <Text style={styles.header}>SITUACIÓN DEMOGRÁFICA Y SOCIAL DEL GRUPO FAMILIAR DEL PRODUCTOR</Text>
                            <Text style={styles.subheader}>Indique la composición de su grupo familiar bajo las siguientes preguntas</Text>

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

                            <Text style={styles.header}>SITUACION LABORAL Y ECONÓMICA DEL GRUPO FAMILIAR DEL PRODUCTOR</Text>
                            <Text style={styles.subheader}>Indique la situación de los ingresos  y participación laboral de los miembros del grupo familiar  en la unidad de producción Acuícola y/o Pesquero Artesanal bajo los siguientes parámetros</Text>

                            <Text>
                                20. ¿Actualmente usted se encuentra?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG20}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG20: itemValue})}>
                                <Picker.Item label="Empleado" value="Empleado" />
                                <Picker.Item label="Desempleado" value="Desempleado" />
                            </Picker>

                            <Text>
                                20.1 ¿Dónde se encuentra empleado la mayor parte del tiempo?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG20_1}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG20_1: itemValue})}>
                                <Picker.Item label="Dentro de la unidad de producción (Acuícola/Pesquero artesanal)" value="Dentro" />
                                <Picker.Item label="Fuera de  la unidad de producción (Acuícola o pesquera)" value="Fuera" />
                            </Picker>

                            <Text>
                                20.2  ¿Cuánto tiempo emplea para la principal actividad?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG20_2}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG20_2: itemValue})}>
                                <Picker.Item label="Jornada completa" value="completa" />
                                <Picker.Item label="Jornada parcial" value="parcial" />
                            </Picker>

                            <Text style={styles.subheader}>Indique la participación del grupo familiar en los eslabones de la cadena productiva</Text>

                            <Text>
                                20.3 ¿En cuál de las siguientes etapas de la unidad de producción se encuentra empleado?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG20_3}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG20_3: itemValue})}>
                                <Picker.Item label="Etapa de producción" value="producción" />
                                <Picker.Item label="Etapa de transformación" value="transformación" />
                                <Picker.Item label="Etapa de comercialización" value="comercialización" />
                            </Picker>

                            <Text>
                                21. ¿Según las siguientes categorías usted es?
                            </Text>
                            <Picker
                                selectedValue={this.state.EG21}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG21: itemValue})}>
                                <Picker.Item label="Empleado fijo (aglún tipo de contrato)" value="empleado fijo" />
                                <Picker.Item label="Trabajador independiente" value="independiente" />
                            </Picker>

                            <Text>
                                21.1. ¿Usted trabaja de forma independiente cómo?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG21_1}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG21_1: itemValue})}>
                                <Picker.Item label="Empleador" value="empleador" />
                                <Picker.Item label="Trabajador por cuenta propia" value="Trabajador por cuenta propia" />
                                <Picker.Item label="Trabajador familiar no retribuido" value="Trabajador familiar" />
                                <Picker.Item label="Socio de cooperatva de productores" value="socio cooperativa" />
                                <Picker.Item label="Otro ¿Cual?" value="otro" />
                            </Picker>

                            <Text>
                                22. ¿Genera ingresos adicionales para su grupo familiar?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG22}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG22: itemValue})}>
                                <Picker.Item label="Sí" value="si" />
                                <Picker.Item label="No" value="no" />
                            </Picker>

                            <Text style={styles.header}>TENENCIA Y CARACTERIZACION DE LA VIVIENDA DEL PRODUCTOR (indicador NBI)</Text>
                            <Text style={styles.subheader}>Indique la forma de tenencia, características  de su vivienda y el acceso a servicios públicos bajo los siguientes parámetros</Text>

                            <Text>
                                23. ¿La vivienda en la que habita es?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG23}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG23: itemValue})}>
                                <Picker.Item label="Propia" value="propia" />
                                <Picker.Item label="Arrendada" value="arrendada" />
                                <Picker.Item label="Familiar" value="familiar" />
                                <Picker.Item label="Posesión" value="posesion" />
                                <Picker.Item label="Otro ¿Cual?" value="otro" />
                            </Picker>

                            <Text>
                                24. ¿El techo está construido con?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG24}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG24: itemValue})}>
                                <Picker.Item label="Madera" value="madera" />
                                <Picker.Item label="Teja de barro" value="teja de barro" />
                                <Picker.Item label="Teja de asbesto" value="asbesto" />
                                <Picker.Item label="Zinc" value="zinc" />
                                <Picker.Item label="Palma" value="palma" />
                                <Picker.Item label="Otro ¿Cual?" value="otro" />
                            </Picker>

                            <Text>
                                25. ¿El piso está construido con?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG25}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG25: itemValue})}>
                                <Picker.Item label="Tierra" value="tierra" />
                                <Picker.Item label="Madera" value="madera" />
                                <Picker.Item label="Cemento" value="cemento" />
                                <Picker.Item label="Baldosa" value="baldosa" />
                                <Picker.Item label="Otro ¿Cual?" value="otro" />
                            </Picker>

                            <Text>
                                26. ¿Las paredes están construidas con?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG26}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG26: itemValue})}>
                                <Picker.Item label="Madera" value="madera" />
                                <Picker.Item label="Ladrillo" value="ladrillo" />
                                <Picker.Item label="Tapia" value="tapia" />
                                <Picker.Item label="Bahareque" value="bahareque" />
                                <Picker.Item label="Otro ¿Cual?" value="otro" />
                            </Picker>

                            <Text>
                                27. De los siguientes servicios públicos y/o privados ¿Cuáles  tiene en su vivienda?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG27}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG27: itemValue})}>
                                <Picker.Item label="IMPLEMENT MULTIPLE SELECTION" value="XYZ" />
                            </Picker>

                            <Text style={styles.header}>SEGURIDAD ALIMENTARIA</Text>
                            <Text style={styles.subheader}>Indique la situación alimentaria de su grupo familiar de acuerdo con los siguientes ítems</Text>

                            <Text>
                                28. En los últimos 3 meses, por falta de dinero u otros recursos, ¿alguna vez en su hogar se quedaron sin alimentos?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG28}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG28: itemValue})}>
                                <Picker.Item label="Sí" value="si" />
                                <Picker.Item label="No" value="no" />
                            </Picker>

                            <Text>
                                29. En los últimos 3 meses, por falta de dinero u otros recursos, ¿alguna vez usted o algún miembro de su hogar dejó de desayunar, almorzar o cenar?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG29}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG29: itemValue})}>
                                <Picker.Item label="Sí" value="si" />
                                <Picker.Item label="No" value="no" />
                            </Picker>

                            <Text>
                                30. En los últimos 3 meses, por falta de dinero u otros recursos, ¿alguna vez usted o algún miembro de su hogar solo comió una vez al día o dejó de:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG30}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG30: itemValue})}>
                                <Picker.Item label="Sí" value="si" />
                                <Picker.Item label="No" value="no" />
                            </Picker>

                            <Text style={styles.header}>ACCESO A EDCUACIÓN</Text>
                            <Text style={styles.subheader}>Indique las condiciones de acceso a educación de acuerdo con los siguientes ítems</Text>

                            <Text>
                                31. ¿Tiene acceso a educación?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG31}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG31: itemValue})}>
                                <Picker.Item label="Pública" value="publica" />
                                <Picker.Item label="Privada" value="privada" />
                            </Picker>

                            <Text>
                                32. ¿Cuál es el nombre del establecimiento educativo?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                multiline={true}
                                placeholder='Registre el nombre'
                                onChangeText={(EG32) => this.setState({EG32})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG32}
                            />

                            <Text>
                                32.1. ¿Qué nivel de educación ofrece?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG31}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG31: itemValue})}>
                                <Picker.Item label="Básica primaria (1° a 5°grado)" value="BP" />
                                <Picker.Item label="Básica secundaria (6° a 9° grado)" value="BS" />
                                <Picker.Item label="Media  (10° a 11° grado)" value="M" />
                                <Picker.Item label="Técnica" value="Tecnica" />
                                <Picker.Item label="Tecnológico" value="Tlogo" />
                                <Picker.Item label="Profesional pregrado" value="Pre" />
                                <Picker.Item label="Postgrado" value="Post" />
                            </Picker>

                            <Text>
                                32.2. ¿Cuánta distancia hay entre su  vivienda y el establecimiento educativo?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType='numeric'
                                multiline={true}
                                placeholder='Registre el valor numérico en kilómetros'
                                onChangeText={(EG32_2) => this.setState({EG32_2})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG32_2}
                            />

                            <Text>
                                32.3. ¿Cuánto tiempo gasta para desplazarse desde su vivienda  hacia el establecimiento educativo?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType='numeric'
                                multiline={true}
                                placeholder='Registre el valor numérico en horas'
                                onChangeText={(EG32_3) => this.setState({EG32_3})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG32_3}
                            />

                            <Text>
                                32.4. ¿Qué medio de transporte (uno o varios) utiliza para desplazarse hacia el establecimiento educativo?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG32_4}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG32_4: itemValue})}>
                                <Picker.Item label="Terrestre" value="Terrestre" />
                                <Picker.Item label="Fluvial" value="Fluvial" />
                                <Picker.Item label="Aéreo" value="Aereo" />
                            </Picker>

                            <Text style={styles.header}>ACCESO A SALUD</Text>
                            <Text style={styles.subheader}>Indique las condiciones de acceso a salud de acuerdo con los siguientes ítems</Text>

                            <Text>
                                33. ¿Está afiliado a servicio de salud?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG33}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG33: itemValue})}>
                                <Picker.Item label="Régimen contributivo (EPS)" value="contributivo" />
                                <Picker.Item label="Régimen subsidiado" value="subsidiado" />
                                <Picker.Item label="Régimen especial" value="especial" />
                                <Picker.Item label="No está afiliado" value="no" />
                                <Picker.Item label="No sabe" value="NS" />
                            </Picker>

                            <Text>
                                33.1. ¿El establecimiento se clasifica como?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG33_1}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG33_1: itemValue})}>
                                <Picker.Item label="Hospital" value="Hospital" />
                                <Picker.Item label="Clínica" value="clinica" />
                                <Picker.Item label="Centro de salud" value="centro de salud" />
                                <Picker.Item label="Puesto de salud" value="puesto de salud" />
                            </Picker>

                            <Text>
                                33.2. ¿Cuánta distancia hay entre su  vivienda y el establecimiento de salud?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType='numeric'
                                multiline={true}
                                placeholder='Registre el valor numérico en kilómetros'
                                onChangeText={(EG33_2) => this.setState({EG33_2})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG33_2}
                            />

                            <Text>
                                33.3. ¿Cuánto tiempo gasta para desplazarse desde su vivienda hacia el establecimiento de salud?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType='numeric'
                                multiline={true}
                                placeholder='Registre el valor numérico en horas'
                                onChangeText={(EG33_3) => this.setState({EG33_3})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG33_3}
                            />

                            <Text>
                                33.4. ¿Qué medio de transporte (uno o varios) utiliza para desplazarse hacia el establecimiento  de salud?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG33_4}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG33_4: itemValue})}>
                                <Picker.Item label="Terrestre" value="Terrestre" />
                                <Picker.Item label="Fluvial" value="Fluvial" />
                                <Picker.Item label="Aéreo" value="Aereo" />
                            </Picker>

                            <Text style={styles.header}>ACCESO A SERVICIOS ACUICOLAS Y/O PESQUEROS</Text>
                            <Text style={styles.subheader}>Indique las condiciones de acceso a servicios de apoyo para la Acuicultura/Pesca artesanal de acuerdo con los siguientes ítems</Text>

                            <Text>
                                34. ¿Qué entidades?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG34}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG34: itemValue})}>
                                <Picker.Item label="AUNAP" value="AUNAP" />
                                <Picker.Item label="ICA" value="ICA" />
                                <Picker.Item label="CAR-CORPOCESAR" value="CAR" />
                                <Picker.Item label="UMATA" value="UMATA" />
                                <Picker.Item label="Otras" value="otras" />
                            </Picker>

                            <Text>
                                34.1. ¿Cuánta distancia recorre para acceder a los servicios ofrecidos por esta entidad?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType='numeric'
                                multiline={true}
                                placeholder='Registre el valor numérico en kilómetros'
                                onChangeText={(EG34_1) => this.setState({EG34_1})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG34_1}
                            />

                            <Text>
                                34.2. ¿Cuánto tiempo emplea para acceder a los servicios ofrecidos por esta entidad?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType='numeric'
                                multiline={true}
                                placeholder='Registre el valor numérico en horas'
                                onChangeText={(EG34_2) => this.setState({EG34_2})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG34_2}
                            />

                            <Text>
                                34.3. ¿Qué medio de transporte (uno o varios) utiliza para desplazarse hacia la institucion?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG34_3}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG34_3: itemValue})}>
                                <Picker.Item label="Terrestre" value="Terrestre" />
                                <Picker.Item label="Fluvial" value="Fluvial" />
                                <Picker.Item label="Aéreo" value="Aereo" />
                            </Picker>

                            <Text>
                                35. ¿Qué servicios?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                multiline={true}
                                placeholder='Registre el tipo de servicio de apoyo al sector productivo'
                                onChangeText={(EG35) => this.setState({EG35})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG35}
                            />

                            <Text style={styles.subheader}>Indique las condiciones de acceso a centros de comercialización de productos de la Acuicultura/Pesca artesanal (Mercados) de acuerdo con los siguientes ítems</Text>

                            <Text>
                                36. ¿Cuánta distancia recorre para acceder a un centro de comercialización?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType='numeric'
                                multiline={true}
                                placeholder='Registre el valor numérico en kilómetros'
                                onChangeText={(EG36) => this.setState({EG36})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG36}
                            />

                            <Text>
                                37. ¿Cuánto tiempo emplea para desplazarse hacia el centro de comercialización?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                keyboardType='numeric'
                                multiline={true}
                                placeholder='Registre el valor numérico en horas'
                                onChangeText={(EG37) => this.setState({EG37})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG37}
                            />

                            <Text>
                                38. ¿Qué medio de transporte (uno o varios) utiliza para desplazarse hacia el centro de comercialización?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG38}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG38: itemValue})}>
                                <Picker.Item label="Terrestre" value="Terrestre" />
                                <Picker.Item label="Fluvial" value="Fluvial" />
                                <Picker.Item label="Aéreo" value="Aereo" />
                            </Picker>

                            <Text>
                                39. ¿El centro de comercialización permanece en funcionamiento  de manera?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG39}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG39: itemValue})}>
                                <Picker.Item label="Periódica" value="periodica" />
                                <Picker.Item label="Permanente" value="Permanente" />
                            </Picker>

                            <Text style={styles.subheader}>Indique las condiciones de acceso a crédito y financiación de acuerdo con los siguientes ítems</Text>

                            <Text>
                                40. ¿Usted ha solicitado alguna vez crédito o financiación para desarrollar actividades acuícolas?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG40}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG40: itemValue})}>
                                <Picker.Item label="Sí" value="si" />
                                <Picker.Item label="No" value="No" />
                            </Picker>

                            <Text>
                                40.1. ¿El crédito  o la financiación fue otorgada por?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG40_1}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG40_1: itemValue})}>
                                <Picker.Item label="Banco comercial" value="banco comercial" />
                                <Picker.Item label="Sociedad o Cooperativas de crédito" value="sociedad" />
                                <Picker.Item label="Prestamista" value="prestamista" />
                                <Picker.Item label="Proveedores de insumos" value="proveedores" />
                                <Picker.Item label="Familiares o amigos" value="familiares/amigos" />
                                <Picker.Item label="El gobierno" value="gonierno" />
                                <Picker.Item label="Otra fuente ¿Cuál?" value="otro" />
                            </Picker>

                            <Text>
                                40.2. ¿Cuál fue el destino final del crédito o financiación?:
                            </Text>
                            <TextInput
                                style={styles.textbox1}
                                multiline={true}
                                placeholder='Registre'
                                onChangeText={(EG40_2) => this.setState({EG40_2})}
                                underlineColorAndroid={'transparent'}
                                value={this.state.EG40_2}
                            />

                            <Text style={styles.subheader}>Indique las condiciones de acceso a asistencia técnica de acuerdo con los siguientes ítems</Text>

                            <Text>
                                41. ¿Ha recibido asistencia técnica?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG41}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG41: itemValue})}>
                                <Picker.Item label="Sí" value="si" />
                                <Picker.Item label="No" value="No" />
                            </Picker>

                            <Text>
                                41.2. ¿La asistencia técnica fue otorgada por?:
                            </Text>
                            <Picker
                                selectedValue={this.state.EG40_1}
                                style={styles.datepicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({EG40_1: itemValue})}>
                                <Picker.Item label="Organizaciones gubernamentales" value="org. gubernamentales" />
                                <Picker.Item label="ONG ¿Cuál?" value="ong" />
                                <Picker.Item label="Asociaciones de productores" value="Asociaciones" />
                                <Picker.Item label="Otros ¿Cuáles?" value="otro" />
                            </Picker>

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
