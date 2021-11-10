
import {useState} from "react";

const ItemCount = (props) => {
    const [cantidad, setValoraciones] = useState(1);
    const increment = () => {
       if (cantidad < props.stock) setValoraciones(cantidad+1)
    }
    const decrement = () => {
       if (cantidad > props.initial) setValoraciones(cantidad-1)
    }
    const onAdd = () => {
        console.log(`Se agregaron ${cantidad} productos al carrito`)

    }
        return (
            <div>
                <button onClick={decrement}>-</button>
                {cantidad}
                <button onClick={increment}>+</button>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>

        );
    }
export default ItemCount;