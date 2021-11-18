
const {productos} = require ('./Item');
const datos = () => {
    return new Promise ((resolve, reject)=>{
        if (productos.length>0){
            setTimeout (()=>{
                resolve(productos)
            },1000);
        } else {
            reject ("Error")
        }
    })
}
datos ()
 .then (data => console.log (data))
 .catch ((err) => console.log (err));
export default ItemList;