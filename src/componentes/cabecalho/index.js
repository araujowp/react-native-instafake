import React, {Fragment} from 'react';
import {Text, Image, View
        } from "react-native";
import estilo from "./estilo.js";
 
 const Cabecalho = ({meuTitulo}) => {
     return(
        <View style={estilo.cabecalho}  >
            <Image source={require("../../../res/img/meuAvatar.png")} 
                   style={estilo.fotoUsuario}
            />
            <Text> {meuTitulo} </Text>
        </View>);
 }

 export default Cabecalho;