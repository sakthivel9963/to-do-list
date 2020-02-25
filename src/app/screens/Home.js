import React, { Component } from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import '../style/style.css';
import { v4 as uuidv4 } from 'uuid';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_do: '',
      to_do_list: localStorage.getItem('to_do_list')
        ? JSON.parse(localStorage.getItem('to_do_list'))
        : [],
      completed_list: localStorage.getItem('completed_list')
        ? JSON.parse(localStorage.getItem('completed_list'))
        : [],
    };
  }

  getInput = (event) => {
    this.setState({
      to_do: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    let { to_do_list } = this.state;
    to_do_list.push({
      uuid: uuidv4(),
      value: this.state.to_do,
      checked: false,
      timestamp: new Date(),
    });
    this.setState({
      to_do_list,
      to_do: '',
    });
    localStorage.setItem('to_do_list', JSON.stringify(to_do_list));
  };

  checkbox = (event, uuid) => {
    let { completed_list, to_do_list } = this.state;
    if (event.target.checked) {
      const checkedValue = to_do_list.filter((value) => value.uuid === uuid);
      checkedValue[0].checked = event.target.checked;
      completed_list.splice(0, 0, checkedValue[0]);
      to_do_list = to_do_list.filter((value) => value.uuid !== uuid);
    } else {
      const checkedValue = completed_list.filter(
        (value) => value.uuid === uuid
      );
      checkedValue[0].checked = event.target.checked;
      to_do_list.push(checkedValue[0]);
      completed_list = completed_list.filter((value) => value.uuid !== uuid);
    }
    this.setState({
      to_do_list,
      completed_list,
    });
    localStorage.setItem('to_do_list', JSON.stringify(to_do_list));
    localStorage.setItem('completed_list', JSON.stringify(completed_list));
  };

  delete = (event, uuid, checked) => {
    let { completed_list, to_do_list } = this.state;
    if (checked) {
      completed_list = completed_list.filter((value) => value.uuid !== uuid);
      this.setState({
        completed_list,
      });
    } else {
      to_do_list = to_do_list.filter((value) => value.uuid !== uuid);
      this.setState({
        to_do_list,
      });
    }
    localStorage.setItem('to_do_list', JSON.stringify(to_do_list));
    localStorage.setItem('completed_list', JSON.stringify(completed_list));
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
        <div className="row m-1">
          <div className="col-sm-6">
            <div className="container border container-background">
              <h2 className="text-center p-2 bottom-border">To Do List</h2>
              <ToDoList
                to_do_list={this.state.to_do_list}
                checkbox={this.checkbox}
                remove={this.delete}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="container border container-background">
              <h2 className="text-center p-2 bottom-border">Completed List</h2>
              <ToDoList
                to_do_list={this.state.completed_list}
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
