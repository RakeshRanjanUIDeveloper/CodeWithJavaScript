import { render, screen } from "@testing-library/react"
import GetByPlaceholderText from "../components/GetByPlaceholderText"

// test("test for single input field", ()=>{
//     render(<GetByPlaceholderText />);
//     const input = screen.getByPlaceholderText('enter user name');
//     expect(input).toBeInTheDocument()
// })

test("test for multiple input field", ()=>{
    render(<GetByPlaceholderText />);
    const inputs = screen.getAllByPlaceholderText('enter user name');
    for (let i = 0; i < inputs.length; i++) {
         expect(inputs[i]).toBeInTheDocument()   
    }
})