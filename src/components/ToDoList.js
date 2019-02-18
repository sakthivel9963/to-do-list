import React from 'react';

export default function ToDoList(props) {
  return (
    <div className="container">
      <ul>
        {props.to_do_list.map((key, index) => {
          return (
            <li key={index}>
              <input type="checkbox" name={index} id={index} onClick={event => props.checkbox(event, index)} />
              <span style={{ textDecoration: key.checked ? 'line-through' : 'inherit' }}>{key.value}</span>
              <button className="btn btn-danger" onClick={event => props.delete(event, index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
