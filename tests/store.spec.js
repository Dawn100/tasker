import { store } from "../redux/store";

it("Initializes store with correct structure", () => {
  expect(store.getState()).toStrictEqual({ todos: [] });
});
