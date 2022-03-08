import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";
import styles from "./Home.module.css";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <h1 className={styles.title}>✨To Do✨</h1>

        <input
          className={styles.input}
          type="text"
          placeholder="What is your ToDo?"
          value={text}
          onChange={onChange}
        />
        <button className={styles.button}>Add</button>
      </form>
      <div className={styles.container}>
        <ul className={styles.ul}>
          {toDos.map((toDo) => (
            <ToDo {...toDo} key={toDo.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

// mapStateToProps : store에서 state 받아오는 함수 => Home component에 prop으로 전달
function mapStateToProps(state) {
  return { toDos: state };
}

// mapDispatchToProps: store에 action을 dispatch 하는 함수 => Home component에 prop으로 전달
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
