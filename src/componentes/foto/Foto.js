import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import estilo from './estilo';
import { curtirFoto, imgLike } from '../api/Curtidas';


const Foto = ({ urlFoto, descricao, qntLikes }) => {
    console.log("no foto chegou " + qntLikes );
    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(qntLikes)

    const clicouCurtir = () => {
        console.log("clicouCurtir: " +  likes )
        const [novoEstCurtiu, qnt] = curtirFoto(curtiu, likes)
        setLikes(qnt)
        setCurtiu(novoEstCurtiu)
    }
    return (
        <Fragment>

            <Image
                source={{ uri: urlFoto }}
                style={estilo.imagem}
            />
            <Text>{descricao}</Text>
            <View style={estilo.viewLike}>
                <TouchableOpacity onPress={curtirFoto}>
                    <Image
                        source={imgLike(curtiu)}
                        style={estilo.like}
                    />
                </TouchableOpacity>
                <Text>curtidas {likes}</Text>
            </View>
        </Fragment>
    )
};

export default Foto;