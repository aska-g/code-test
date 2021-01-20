import React, { Component } from 'react';
import Item from './Item';
import './style/Assignment.scss';

class Assignment extends Component {
  render() {
    const {name, items, currentUser } = this.props;

    return (
      <div className='assignment'>
        <h1>{name}</h1>
        <div className='items'>
          {items.map(item => {
            return(
              <Item 
                key={item.product.id} 
                type={item.type} 
                title={item.product.title} 
                product={item.product}
                image={item.product.image}
                currentUser={currentUser}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Assignment;
