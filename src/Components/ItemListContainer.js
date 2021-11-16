import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
class ItemListContainer extends React.Component {
    render() {
      return (
          <>
        <h1>¡Bienvenidos a {this.props.nombre}!</h1>
        <ItemCount stock={5} initial={1} />7
        <ItemList />
        </>
      );
    }
  }
export default ItemListContainer;