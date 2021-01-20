import React, { Component } from 'react';
import { loremIpsum } from "lorem-ipsum";
import Leaderboard from './Leaderboard';
import './style/ProductDetails.scss';


class ProductDetails extends Component {
  state = {
    leaderboards: [],
    leaderboardsPopulated: false
  }

  componentDidMount() {
    fetch('test-leaderboard-data.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        leaderboards: data.leaderboard_data,
        leaderboardsPopulated: true
      })
    });
  }
  
  render() {
    const { product, currentUser } = this.props;
    const { leaderboards, leaderboardsPopulated } = this.state;
  
    return (
      <div className="modal-wrapper">
        <div className="product-details-wrapper">
          <div className="product" onClick={this.toggleModal}>
            <div className="product-title">{product.title}</div>

            <div className="product-description">{loremIpsum({count: 2, units: "paragraphs"})}</div>
          </div>
        </div>
        {leaderboardsPopulated &&
          <Leaderboard leaderboard={leaderboards.find(leaderboard => leaderboard.title === product.title)} currentUser={currentUser}/>
        }
        
        
        

      </div>

    );
  }
}

export default ProductDetails;
