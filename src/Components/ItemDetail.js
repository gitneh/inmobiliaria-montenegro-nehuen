const {productos} = require ('./Item');
let is_ok = true;

const ItemDetail = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (is_ok) {
                resolve (productos)} 
            else{
                reject ("error")
                }
            },2000);
        })
}
export default ItemDetail;