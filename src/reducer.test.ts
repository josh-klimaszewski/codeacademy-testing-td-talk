import {
  stateWithOneItem,
  stateWithTwoItems,
  updatedStateWithTwoItems,
} from "./mocks";
import { initialState, reducer } from "./reducer";

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
