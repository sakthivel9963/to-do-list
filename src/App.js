import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_do: '',
      to_do_list: [
        {
          value: 'Sakthivel',
          checked: 0
        }
      ]
    };
  }

  /**
   *
   * @param {*} event
   * To get the input value from the user and set the value in the state
   */
  getInput(event) {
    // console.log(event.target.value);
    this.setState({
      to_do: event.target.value
    });
  }

  /**
   *
   * @param {*} event
   *  getting the state value and putting it into the list
   *  ...this.state.to_do_list will get all the instance of the array
   *  then we will create the new array and push the value into the new array
   *  state value should not be changed directly
   */
  onSubmit(event) {
    this.setState({
      to_do_list: [
        ...this.state.to_do_list,
        {
          value: this.state.to_do,
          checked: 0
        }
      ]
    });
    //console.log(this.state.to_do_list);
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
              <input type="submit" className="btn btn-success" value="submit" onClick={event => this.onSubmit(event)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
