import React, { Component } from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import '../style/style.css';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_do: '',
      to_do_list: [
        {
          value: 'Sakthivel',
          checked: false,
        },
      ],
    };
  }

  /**
   *
   * @param {*} event
   * To get the input value from the user and set the value in the state
   */
  getInput = (event) => {
    // console.log(event.target.value);
    this.setState({
      to_do: event.target.value,
    });
  };

  /**
   *
   * @param {*} event
   *  getting the state value and putting it into the list
   *  ...this.state.to_do_list will get all the instance of the array
   *  then we will create the new array and push the value into the new array
   *  state value should not be changed directly
   */
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      to_do_list: [
        ...this.state.to_do_list,
        {
          value: this.state.to_do,
          checked: false,
        },
      ],
      to_do: '',
    });
    //console.log(this.state.to_do_list);
  };

  /**
   *
   * @param {*} event will get the user trigger event
   * @param {*} index will be the particular index in the list
   */
  checkbox = (event, index) => {
    let list = [...this.state.to_do_list]; // making a copy of the list
    list[index] = { ...list[index] }; // making copy of the object
    list[index].checked = event.target.checked; // changing the value in the object
    // update the state value with new array object
    this.setState({
      to_do_list: list,
    });
  };

  /**
   *
   * @param {*} event will get the user trigger event
   * @param {*} index will be the particular index in the list
   */
  delete = (event, index) => {
    let list = [...this.state.to_do_list]; // making a copy of the list
    list.splice(index, 1); // remove a value from the list
    // update the state value with new array object after deleting the value from the list
    this.setState({
      to_do_list: list,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="my-2">
          <h1 className="text-center">To Do List App</h1>
        </div>
        <ToDoForm
          to_do={this.state.to_do}
          getInput={this.getInput}
          onSubmit={this.onSubmit}
        />
        <div className="row">
          <div className="col-sm-6">
            <div className="container border ml-3 container-background">
              <h2 className="text-center p-2 bottom-border">To Do List</h2>
              <ToDoList
                to_do_list={this.state.to_do_list}
                checkbox={this.checkbox}
                remove={this.delete}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="container">
              <ToDoList
                to_do_list={this.state.to_do_list}
                checkbox={this.checkbox}
                remove={this.delete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
