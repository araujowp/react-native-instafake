const lerFotos = async(callBack) => {
    const fotosHTTP = await fetch("http://192.168.0.108:3030/feed");
    const fotosJson = await fotosHTTP.json(); 
    callBack(fotosJson);
  }
export default lerFotos;