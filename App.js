import React, 
      {Fragment} from 'react';
import {Text,
        Image, 
        ScrollView,
         Dimensions, 
         StyleSheet } from "react-native";

const fotos = [
  {titulo:"Wagner"}, 
  {titulo:"Maria"},
  {titulo:"Flavia"},
  {titulo:"Julio Cesar"}
]

const largura = Dimensions.get("screen").width;

/** 
<Text>Wagner</Text>
      <Image source={require("./res/img/meuAvatar.png")} 
        style={estilo.imagem} />

      <Text>Maria adsaFSf</Text>
      <Image source={require("./res/img/meuAvatar.png")} 
        style={estilo.imagem} />
*/


const App = () => {
  return (
    <ScrollView>
      {fotos.map(foto =>
        <Fragment>
          <Text>{foto.titulo}</Text>
          <Image source={require("./res/img/meuAvatar.png")} 
            style={estilo.imagem} />
        </Fragment> 
      )}
      
    </ScrollView>
  )
};

const estilo = StyleSheet.create({
  imagem:{
    width:largura,
    height:largura
  }
})

export default App;