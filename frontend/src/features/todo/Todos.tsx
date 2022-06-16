import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import react, { useEffect } from "react";
import { todoAdded } from "./todosSlice";
import { store } from "../../app/store";

const Todos = () => {
  const todosList = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(todoAdded("Title4"));
    store.getState();
  }, []);
  return (
    <>
      <div>Todos List</div>
      {/* {console.log(todosList)} */}
      <div></div>
    </>
  );
};

export default Todos;
