import {
  createAction,
  createSlice,
  PayloadAction,
  createAsyncThunk,
  nanoid,
} from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

// Define a type for the slice state
export interface TodosState {
  id: number;
  text: string;
  completed: boolean;
}

// Define the initial state using that type
const initialState: TodosState[] = [
  {
    text: "Use Redux",
    completed: false,
    id: 0,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    todoAdded(state: TodosState[], action: PayloadAction<string>) {
      state.push({
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.payload,
      });
    },
  },
});

export const { todoAdded } = todosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const todosList = (state: RootState) => state.todos;
// export const todosLoading = (state: RootState) => state.todos.loading;

export default todosSlice.reducer;
