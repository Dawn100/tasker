import App from "../App";
import { create } from "react-test-renderer";
import React from "react";

describe("App", () => {
  it("renders", () => {
    const app = create(<App />).toJSON();
    expect(app).toMatchSnapshot();
    expect(app.type).toEqual("View");
  });
});
