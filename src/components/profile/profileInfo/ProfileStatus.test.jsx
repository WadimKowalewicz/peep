import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="peep" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("peep");
    });
    test("after creation span should be displayd", () => {
        const component = create(<ProfileStatus status="peep" />);
        let span = component.root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation input shouldn't be displayd", () => {
        const component = create(<ProfileStatus status="peep" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("after creation text should be correct", () => {
        const component = create(<ProfileStatus status="peep" />);
        let span = component.root.findByType("span");
        expect(span.children[0]).toBe("peep");
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="peep" />);
        let span = component.root.findByType("span");
        span.props.onDoubleClick()
        let input = component.root.findByType("input");
        expect(input.props.value).toBe("peep");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="peep" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});