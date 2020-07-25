const lerFotos = async(callBack) => {
    const fotosHTTP = await fetch("http://192.168.0.104:3030/feed"); //casa
    //const fotosHTTP = await fetch("http://172.20.11.92:3030/feed");
    const fotosJson = await fotosHTTP.json(); 
    callBack(fotosJson);
  }
export default lerFotos;