import React from 'react';
class ItemListContainer extends React.Component {
    render() {
      return (
          <>
        <h1>¡Bienvenidos a {this.props.nombre}!</h1>
        </>
      );
    }
  }
export default ItemListContainer;