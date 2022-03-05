import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// dispatch object: Add
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
// dispatch object: Delete
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};
// Store
const store = createStore(reducer);

// 업데이트 마다 todo 읽기
store.subscribe(() => console.log(store.getState()));

// Dispatch action: Add
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};
// Dispatch action: Delete
const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

// Todo Paint
const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    // 삭제버튼 EventListener
    btn.addEventListener("click", dispatchDeleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
// 업데이트마다 Paint
store.subscribe(paintToDo);

// Submit
const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};
// 제출버튼 EventListener
form.addEventListener("submit", onSubmit);
