import Item from './Item';
const datos = () => {
    return new Promise ((resolve, reject)=>{
        if (Item.productos.length>0){
            setTimeout (()=>{
                resolve(Item.productos)
            },1000);
        } else {
            reject ("Error")
        }
    })
}
datos ()
 .then (data => console.log (data))
 .catch ((err) => console.log (err))
export default ItemList;