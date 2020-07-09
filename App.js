import React, 
      {Fragment} from 'react';
import {Text,
        Image, 
        ScrollView,
         Dimensions, 
         StyleSheet, 
         FlatList } from "react-native";
import {Cabecalho} from "./src/componentes/cabecalho/index.js";
import {Foto} from "./src/componentes/foto/index.js";

const fotos = [
  {id: 1, titulo:"Shugock Rengaw"},
  {id: 1, titulo:"Wagner P. rAraujo"}, 
  {id: 2, titulo:"Maria"},
  {id: 3, titulo:"Flavia"},
  {id: 4, titulo:"Julio Cesar"},
  {id: 5, titulo:"Andréia"},
  {id: 6, titulo:"Luiza"}
]

const largura = Dimensions.get("screen").width;

const App = () => {
  return (
      <FlatList
        data={fotos}
        keyExtractor ={(item) => item.id.toString()}
        renderItem={({item})=>
        <Fragment>
            <Cabecalho meuTitulo={item.titulo} />
            <Foto />
        </Fragment>
        }
      />
  )
};

export default App;