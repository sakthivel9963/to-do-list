import React from 'react';

export default function ToDoForm(props) {
  return (
    <div className="container">
      <form onSubmit={event => props.onSubmit(event)}>
        <div className="input-group mb-3">
          <input type="text" className="form-control" id="to_do" placeholder="Enter your text here" onChange={event => props.getInput(event)} value={props.to_do} />
          <div className="input-group-append">
            <input type="submit" className="btn btn-success" value="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
