import React from 'react';

const ToDoList = ({ to_do_list, checkbox, remove }) => {
  return (
    <React.Fragment>
      <ul style={{ listStyle: 'none' }} className="p-0">
        {to_do_list.map((key, index) => {
          return (
            <li key={index} className="mt-3 p-3 li-background white-font">
              <div className="row">
                <div className="custom-col-1 d-flex align-self-center">
                  <input
                    type="checkbox"
                    name={index}
                    id={index}
                    onChange={(event) => checkbox(event, index)}
                    checked={key.checked}
                  />
                </div>
                <div className="custom-col-10 ">
                  <span
                    style={{
                      textDecoration: key.checked ? 'line-through' : 'none',
                    }}
                  >
                    <span className="list-text">{key.value}</span>
                  </span>
                </div>
                <div className="close-col-1 d-flex align-self-center">
                  <button
                    type="button"
                    className="close close-button"
                    onClick={(event) => remove(event, index)}
                  >
                    &times;
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ToDoList;
