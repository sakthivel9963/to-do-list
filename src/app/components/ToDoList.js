import React from 'react';

const ToDoList = ({ to_do_list, checkbox, remove }) => {
  return (
    <React.Fragment>
      <ul style={{ listStyle: 'none' }} className="p-0">
        {to_do_list.map((key) => {
          return (
            <li key={key.uuid} className="mt-3 p-3 li-background white-font">
              <div className="row">
                <div className="custom-col-1 d-flex align-self-center">
                  <input
                    type="checkbox"
                    name={key.uuid}
                    id={key.uuid}
                    onChange={(event) => checkbox(event, key.uuid)}
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
                    onClick={(event) => remove(event, key.uuid, key.checked)}
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
