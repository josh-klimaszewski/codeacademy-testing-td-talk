import { Action, Item, State } from "./types";

export const initialState: State = {
  todos: [],
};

export const findNextId = (todos: Item[]): number => {
  if (todos.length === 0) {
    return 1;
  } else {
    const allIds = todos.map((t) => t.id);
    return Math.min(...allIds) + 1;
  }
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add": {
      if (action.data.length === 0) {
        return state;
      }
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: findNextId(state.todos), description: action.data },
        ],
      };
    }
    case "edit": {
      const { id, description } = action.data;
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === id) {
            return {
              ...t,
              description,
            };
          }
          return t;
        }),
      };
    }
    case "delete": {
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.data),
      };
    }
    case "default": {
      return initialState;
    }
    default:
      return state;
  }
};
