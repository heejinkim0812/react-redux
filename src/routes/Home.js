import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What is your todo?"
          value={text}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

// mapStateToProp : store의 state 받아오는 함수 => Home component에 prop으로 전달
function mapStateToProp(state) {
  return { toDos: state };
}

export default connect(mapStateToProp)(Home);
