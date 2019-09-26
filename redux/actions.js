/*  Action Types    */
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

/*  Action Creators    */
export const addTodo = todo => {
  return { type: ADD_TODO, payload: { todo } };
};

export const deleteTodo = id => {
  return { type: DELETE_TODO, payload: { id } };
};

export const completeTodo = id => {
  return {
    type: COMPLETE_TODO,
    payload: { id }
  };
};
