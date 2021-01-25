import React from "react";
import { render } from "@testing-library/react";
import { ExampleText } from "../ExampleText";

it("should ExampleText match with snapshot", () => {
    const { container } = render(<ExampleText value="hola" />)
    expect(container).toMatchSnapshot()
})