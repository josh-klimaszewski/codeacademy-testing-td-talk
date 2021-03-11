import { Item, State } from "./types";

export const testItemOne: Item = {
  id: 1,
  description: "test description 1",
};

export const updatedTestItemOne: Item = {
  id: 1,
  description: "updated test description 1",
};

export const testItemTwo: Item = {
  id: 2,
  description: "test description 2",
};

export const stateWithOneItem: State = {
  todos: [testItemOne],
};

export const stateWithTwoItems: State = {
  todos: [testItemOne, testItemTwo],
};

export const updatedStateWithTwoItems: State = {
  todos: [updatedTestItemOne, testItemTwo],
};
