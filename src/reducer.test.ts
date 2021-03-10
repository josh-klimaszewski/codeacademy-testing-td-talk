import { initialState, reducer } from "./reducer";
import { State } from "./types";

const testItemOne = {
  id: 1,
  description: "test description 1",
};

const updatedTestItemOne = {
  id: 1,
  description: "updated test description 1",
};

const testItemTwo = {
  id: 2,
  description: "test description 2",
};

const stateWithOneItem: State = {
  todos: [testItemOne],
};

const stateWithTwoItems: State = {
  todos: [testItemOne, testItemTwo],
};

const updatedStateWithTwoItems: State = {
  todos: [updatedTestItemOne, testItemTwo],
};

describe("reducer", () => {
  it("returns initial state", () => {
    const nextState = reducer(initialState, { type: "default" });
    expect(nextState).toStrictEqual(initialState);
  });
  it("adds an item to state", () => {
    const nextState = reducer(initialState, {
      type: "add",
      data: "test description 1",
    });
    expect(nextState).toStrictEqual(stateWithOneItem);
  });
  it("adds an item to mature state", () => {
    const nextState = reducer(stateWithOneItem, {
      type: "add",
      data: "test description 2",
    });
    expect(nextState).toStrictEqual(stateWithTwoItems);
  });
  it("edits an item in state", () => {
    const nextState = reducer(stateWithTwoItems, {
      type: "edit",
      data: {
        id: 1,
        description: "updated test description 1",
      },
    });
    expect(nextState).toStrictEqual(updatedStateWithTwoItems);
  });
  it("deletes an item in state", () => {
    const nextState = reducer(stateWithTwoItems, {
      type: "delete",
      data: 2,
    });
    expect(nextState).toStrictEqual(stateWithOneItem);
  });
});
