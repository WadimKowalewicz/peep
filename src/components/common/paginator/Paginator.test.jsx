import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component", () => {
    test("page count is 11 but should be showed 10 only", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        let spans = component.root.findAllByType("span");
        expect(spans.length).toBe(10);
    });
    test("if pages count is more then 10 button Next should be showed", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        let button = component.root.findAllByType("button");
        expect(button.length).toBe(1);
    });
    
});