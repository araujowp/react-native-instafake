import React, 
      {Fragment} from 'react';
import {Image, 
         Dimensions, 
         StyleSheet} from "react-native";
import estilo from "./estilo.js";

const Foto = () => {
  return (
        <Fragment>
            <Image source={require("../../../res/img/meuAvatar.png")} 
                  style={estilo.imagem} />
        </Fragment>
  )
};

export default Foto;