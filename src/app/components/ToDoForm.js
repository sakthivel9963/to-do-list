import React from 'react';

const ToDoForm = (props) => {
  const { onSubmit, getInput, to_do } = props;

  return (
    <div className="container">
      <form onSubmit={(event) => onSubmit(event)}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="to_do"
            placeholder="Enter your text"
            onChange={(event) => getInput(event)}
            value={to_do}
          />
          <div className="input-group-append">
            <input type="submit" className="btn btn-success" value="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
