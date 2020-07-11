import React, 
      {Fragment} from 'react';
import {Image, 
         Dimensions, 
         StyleSheet, 
         Text} from "react-native";
import estilo from "./estilo.js";

const Foto = ({urlFoto, descricao}) => {
  return (
        <Fragment>
            <Image source={{ uri : urlFoto}} 
                  style={estilo.imagem} />
            <Text>{descricao}</Text>
            <Image source={pegarImagemLike(0)}  
                   style={estilo.like}/>
        </Fragment>
  )
};

const pegarImagemLike = (quantidadeLikes) => {
      if (quantidadeLikes > 0 ){
            return require("../../../res/img/s2-checked.png")
      }else{
            return require("../../../res/img/s2.png")
      }
} 

export default Foto;