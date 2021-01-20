import React, { Component, useState, useEffect } from 'react';
import './style/Leaderboard.scss';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: null
    };
  }
  componentDidMount = () => {
    if (document.querySelector('.highlighted')) {
      this.setState({ position: document.querySelector('.highlighted').getBoundingClientRect().y })
    }
  }
  handleScroll = () => {
    this.setState({ position: document.querySelector('.highlighted').getBoundingClientRect().y })
  }
  render() {
    const { leaderboard, currentUser } = this.props;
    const { position } = this.state;

    return (
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <div className="leaderboard-list" onScroll={document.querySelector('.highlighted') ? this.handleScroll : ''}>
          {typeof leaderboard != "undefined" &&
            leaderboard.entries
              .sort((a, b) => (a.rank > b.rank) ? -1 : ((b.rank > a.rank) ? 1 : 0))
              .map(entry => {
                return (
                  <li
                    key={entry.user.id}
                    className=
                    {`leaderboard-list-item 
                ${entry.user.id === currentUser.id ? "highlighted" : ""}
                ${position > 300 ? "bottom" : 'top'}`}
                  >
                    <div className="left-align">

                      <img className="leaderboard-picture" src={entry.user.image} alt="" />
                      {entry.user.username}
                    </div>
                    <div className="right-align">
                      {entry.value}
                    </div>
                  </li>
                );
              })}
        </div>
      </div>
    );
  }
}

export default Leaderboard;
