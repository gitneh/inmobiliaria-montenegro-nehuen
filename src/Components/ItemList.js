import Item from "./Item";

const productos = (data) => {
    return new Promise ((resolve, eject)=>{
        if (productos.length>0){
            setTimeout (()=>{
                resolve(data)
            },1000);
        } else {
            reject ("Error")
        }
    })
}