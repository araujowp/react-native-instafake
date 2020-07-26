import React, {Fragment, useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Cabecalho} from './src/componentes/cabecalho/index.js';
import {Foto} from './src/componentes/foto/index.js';
import lerFotos from './src/componentes/api/Feed.js';
import Comentarios from './src/componentes/comentarios/Comentarios.js';

const App = () => {
  const [fotos, setFotos] = useState([]);
  useEffect(() => {
    lerFotos(setFotos);
  }, []);
  return (
    <FlatList
      data={fotos}
      keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=>
        <Fragment>
          <Cabecalho nomeUsuario={item.userName} urlImagem={item.userURL} />
          <Foto urlFoto={item.userURL} descricao={item.description} qntLikes={item.likes}/>
          <Comentarios comentarios={item.comentarios}/>
        </Fragment>
        }
      />
  )
};

export default App;
