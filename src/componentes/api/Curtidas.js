const imgLike = (curtiu) => {
    if (curtiu) {
        return require("D:/estudos/react_native/instafake/res/img/s2-checked.png")
        //return require("../../res/img/s2-checked.png")
    } else {
        return require("D:/estudos/react_native/instafake/res/img/s2.png")
        //return require("../../res/img/s2.png")
    }
}

const curtirFoto = (curtiu, likes) => {
    let qnt = likes;
    if(curtiu){
        qnt--;
    }else{
        qnt++;
    }
    return [!curtiu, qnt];
}

export {imgLike, curtirFoto}