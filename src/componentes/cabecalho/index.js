import React, {Fragment} from 'react';
import {Text, Image
        } from "react-native";
import estilo from "./estilo.js";
 
 const Cabecalho = ({meuTitulo}) => {
     return(
        <Fragment>
            <Image source={require("../../../res/img/meuAvatar.png")} 
                   style={estilo.fotoUsuario}
            />
            <Text> {meuTitulo} </Text>
        </Fragment>);
 }

 export default Cabecalho;