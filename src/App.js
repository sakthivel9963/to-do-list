import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_do: '',
      to_do_list: [
        {
          value: 'Sakthivel',
          checked: false
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
          checked: false
        }
      ],
      to_do: ''
    });
    //console.log(this.state.to_do_list);
  }

  /**
   *
   * @param {*} event will get the user trigger event
   * @param {*} index will be the particular index in the list
   */
  checkbox(event, index) {
    let list = [...this.state.to_do_list]; // making a copy of the list
    list[index] = { ...list[index] }; // making copy of the object
    list[index].checked = event.target.checked; // changing the value in the object
    // update the state value with new array object
    this.setState({
      to_do_list: list
    });
  }

  /**
   *
   * @param {*} event will get the user trigger event
   * @param {*} index will be the particular index in the list
   */
  delete(event, index) {
    let list = [...this.state.to_do_list]; // making a copy of the list
    list.splice(index, 1); // remove a value from the list
    // update the state value with new array object after deleting the value from the list
    this.setState({
      to_do_list: list
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
              <input type="submit" className="btn btn-success" value="submit" onClick={event => this.onSubmit(event)} />
            </div>
          </div>
        </div>
        <div className="container">
          <ul>
            {this.state.to_do_list.map((key, index) => {
              return (
                <li key={index}>
                  <input type="checkbox" name={index} id={index} onClick={event => this.checkbox(event, index)} />
                  <span style={{ textDecoration: key.checked ? 'line-through' : 'inherit' }}>{key.value}</span>
                  <button className="btn btn-danger" onClick={event => this.delete(event, index)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
