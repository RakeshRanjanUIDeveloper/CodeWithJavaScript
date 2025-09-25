import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../components/Input";

test("on change event testing", ()=>{
    render(<Input />)
    let input = screen.getByLabelText('dynamic-input')
    fireEvent.change(input, {target: {value:'a'}})
    expect(input.value).toBe('a');
})
