import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
import styles from "./ToDo.module.css";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li className={styles.toDo}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick} className={styles.button}>
        DEL
      </button>
    </li>
  );
}

// mapDispatchToProps: store에 action을 dispatch 하는 함수 => ToDo component에 prop으로 전달
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
