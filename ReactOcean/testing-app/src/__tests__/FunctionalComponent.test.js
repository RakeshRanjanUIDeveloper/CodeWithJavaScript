import { fireEvent, render, screen } from "@testing-library/react";
import FunctionalComponent from "../components/FunctionalComponent"
import handleOtherMethod from "../components/helper";

test("method testing case 1", ()=>{
    render(<FunctionalComponent />);
    const btn = screen.getByTestId('btn1');
    fireEvent.click(btn);
    expect(screen.getByText('Hello')).toBeInTheDocument()
})

test("method testing case 2", ()=>{
    expect(handleOtherMethod()).toMatch("hi")
})