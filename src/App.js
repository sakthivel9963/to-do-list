import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_do: ''
    };
  }

  /**
   * @param {*} event
   * To get the input value from the user and set the value in the state
   */
  getInput(event) {
    console.log(event.target.value);
    this.setState({
      to_do: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="my-5">
          <h1 className="text-center">To Do List App</h1>
        </div>
        <div className="container">
          <div className="input-group mb-3">
            <input type="text" className="form-control" id="to_do" placeholder="Enter your text here" onChange={event => this.getInput(event)} value={this.state.to_do} />
            <div className="input-group-append">
              <div className="btn btn-primary">Search</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
