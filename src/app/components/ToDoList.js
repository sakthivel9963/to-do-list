import React from 'react';

const ToDoList = ({ to_do_list, checkbox, remove }) => {
  return (
    <div className="container">
      <ul>
        {to_do_list.map((key, index) => {
          return (
            <li key={index} className="mt-3">
              <input
                type="checkbox"
                name={index}
                id={index}
                onChange={(event) => checkbox(event, index)}
                checked={key.checked}
              />
              <span
                style={{
                  textDecoration: key.checked ? 'line-through' : 'inherit',
                }}
              >
                {key.value}
              </span>
              <button
                className="btn btn-danger"
                onClick={(event) => remove(event, index)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
