import React from "react";
import { render } from "@testing-library/react";
import { DefinitionText } from "../DefinitionText";

it("should DefinitionText match with snapshot", () => {
    const { container } = render(<DefinitionText value="hola" />)
    expect(container).toMatchSnapshot()
})