import { Action, Item, State } from "./types";

enum Dictionary {
  TEST_DESCRIPTION = "test description 1",
  UPDATED_TEST_DESCRIPTION = "updated test description 1",
  TEST_DESCRIPTION_2 = "test description 2",
}

export const testItemOne: Item = {
  id: 1,
  description: Dictionary.TEST_DESCRIPTION,
};

export const updatedTestItemOne: Item = {
  ...testItemOne,
  description: Dictionary.UPDATED_TEST_DESCRIPTION,
};

export const testItemTwo: Item = {
  id: 2,
  description: Dictionary.TEST_DESCRIPTION_2,
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

export const addFirstTestItemAction: Action = {
  type: "add",
  data: Dictionary.TEST_DESCRIPTION,
};

export const addSecondItemAction: Action = {
  type: "add",
  data: Dictionary.TEST_DESCRIPTION_2,
};

export const editFirstItemAction: Action = {
  type: "edit",
  data: updatedTestItemOne,
};

export const deleteSecondItemAction: Action = {
  type: "delete",
  data: testItemTwo.id,
};
