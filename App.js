import React, 
      {Fragment} from 'react';
import {Text,
        Image, 
        ScrollView,
         Dimensions, 
         StyleSheet, 
         FlatList } from "react-native";
import Cabecalho from "./src/componentes/cabecalho/index.js";

const fotos = [
  {id: 1, titulo:"Wagner"}, 
  {id: 2, titulo:"Maria"},
  {id: 3, titulo:"Flavia"},
  {id: 4, titulo:"Julio Cesar"}
]

const largura = Dimensions.get("screen").width;

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor ={(item) => item.id.toString()}
        renderItem={({item})=>
        <Fragment>
            <Cabecalho meuTitulo={item.titulo} />
            <Image source={require("./res/img/meuAvatar.png")} 
                  style={estilo.imagem} />
        </Fragment>
        }
      />
    </ScrollView>
  )
};

const estilo = StyleSheet.create({
  imagem:{
    width:largura,
    height:largura * 0.60
  }
})

export default App;