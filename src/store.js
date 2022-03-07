import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

// action: addToDo
const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
// action: deleteToDo
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

// reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

// export

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
