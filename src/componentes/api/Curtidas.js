const imgLike = (curtiu) => {
    console.log("chegou aqui")
    if (curtiu) {
        console.log("curtiu sim")
        return require("D:/estudos/react_native/instafake/res/img/s2-checked.png")
        //return require("../../res/img/s2-checked.png")
    } else {
        console.log("curtiu não")
        return require("D:/estudos/react_native/instafake/res/img/s2.png")
        //return require("../../res/img/s2.png")
    }
}

const curtirFoto = (curtiu, likes) => {
    console.log("curtirFoto: likes " + likes)
    let qnt = likes;
    if(curtiu){
        qnt--;
    }else{
        qnt++;
    }
    console.log("curtirFoto:" + qnt)
    return [!curtiu, qnt];
}

export {imgLike, curtirFoto}