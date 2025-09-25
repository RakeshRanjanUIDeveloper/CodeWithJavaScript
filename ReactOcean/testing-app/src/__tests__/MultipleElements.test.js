import { render, screen } from "@testing-library/react"
import MultipleElement from "../components/MultipleElement"

test("getByRole Testing", ()=>{
    render(<MultipleElement />);
    const btn1 = screen.getByRole('button', {name:'Click 1'});
    const btn2 = screen.getByRole('button', {name:'Click 2'});
    const input1 = screen.getByRole('textbox', {name: 'User Name'})
    const input2 = screen.getByRole('textbox', {name: 'User Age'})
    const div1 = screen.getByRole('status');
    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(div1).toBeInTheDocument();
})

test("getAllByRole", ()=>{
    render(<MultipleElement />)
    const times = screen.getAllByRole('time');
    for(let i=0; i<times.length; i++){
        expect(times[i]).toBeInTheDocument()
    }
})

test("getByLabelText", ()=>{
    render(<MultipleElement />)
    const checkbox = screen.getByLabelText('skills');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked()
})