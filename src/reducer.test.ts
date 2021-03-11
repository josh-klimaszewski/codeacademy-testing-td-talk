import {
  addFirstTestItemAction,
  addSecondItemAction,
  deleteSecondItemAction,
  editFirstItemAction,
  stateWithOneItem,
  stateWithTwoItems,
  updatedStateWithTwoItems,
} from "./mocks";
import { initialState, reducer } from "./reducer";

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
