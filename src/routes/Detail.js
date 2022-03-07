import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const id = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

// mapStateToProps : store에서 state 받아오는 함수 => Detail component에 prop으로 전달
function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
