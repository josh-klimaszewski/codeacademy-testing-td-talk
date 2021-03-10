export type Item = {
  id: number;
  description: string;
};

export type State = {
  todos: Item[];
};

type AddAction = {
  type: "add";
  data: string;
};
type EditAction = {
  type: "edit";
  data: Item;
};
type DeleteAction = {
  type: "delete";
  data: number;
};

type DefaultAction = { type: "default" };

export type Action = AddAction | EditAction | DeleteAction | DefaultAction;
