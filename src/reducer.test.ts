import {
  addFirstTestItemAction,
  addSecondItemAction,
  deleteSecondItemAction,
  editFirstItemAction,
  stateWithOneItem,
  stateWithThreeItems,
  stateWithTwoItems,
  updatedStateWithTwoItems,
} from "./mocks";
import { findNextId, initialState, reducer } from "./reducer";

describe("findNextId", () => {
  it("returns 1 on empty state", () => {
    expect(findNextId(initialState.todos)).toBe(1);
  });
  it("returns 2 on state with one item", () => {
    expect(findNextId(stateWithOneItem.todos)).toBe(2);
  });
  it("returns 3 on state with two items", () => {
    expect(findNextId(stateWithTwoItems.todos)).toBe(3);
  });
  it("returns 4 on state with three items", () => {
    expect(findNextId(stateWithThreeItems.todos)).toBe(4);
  });
});

describe("reducer", () => {
  it("returns initial state", () => {
    expect(reducer(initialState, { type: "default" })).toStrictEqual(
      initialState
    );
  });
  it("adds an item to state", () => {
    expect(reducer(initialState, addFirstTestItemAction)).toStrictEqual(
      stateWithOneItem
    );
  });
  it("adds an item to mature state", () => {
    expect(reducer(stateWithOneItem, addSecondItemAction)).toStrictEqual(
      stateWithTwoItems
    );
  });
  it("edits an item in state", () => {
    expect(reducer(stateWithTwoItems, editFirstItemAction)).toStrictEqual(
      updatedStateWithTwoItems
    );
  });
  it("deletes an item in state", () => {
    expect(reducer(stateWithTwoItems, deleteSecondItemAction)).toStrictEqual(
      stateWithOneItem
    );
  });
});
