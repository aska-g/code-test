import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './style/Item.scss';
import ProductDetails from './ProductDetails';

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
    }
    ReactModal.setAppElement('.main')
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen }) 
  }

  render() {
    const { type, title, image, product, currentUser } = this.props;
    return (
      <div className="item" onClick={this.toggleModal}>
        <div className="picture">
          <img className="item-picture" src={image} alt="" />
          <div className="item-type">{type}</div>
        </div>
        <div className="item-title">{title}</div>

        <ReactModal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          style={{ overlay: { backgroundColor: '#222831' }}}
        >
        <div className="button-wrapper">

          <button onClick={this.toggleModal}>X</button>
        </div>
        <ProductDetails product={product} currentUser={currentUser}/>
        
        </ReactModal>
      </div>      
    );
  }
}

export default Item;
