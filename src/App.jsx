import React, { Component } from 'react';
import './style/App.scss';
import Assignment from './Assignment';


class App extends Component {
  state = {
    assignments: [],
    modalOpen: false
  }
  componentDidMount() {
    fetch('test-home-data.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        assignments: data.assignments,
        currentUser: data.profile
      })
    });
  }

  render() {
    const { assignments, currentUser } = this.state;

    return (
      <div className="app">
        <div className="main">
          {assignments.map(assignment => {
            return(
              <Assignment key={assignment.name} name={assignment.name} items={assignment.items} currentUser={currentUser}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
