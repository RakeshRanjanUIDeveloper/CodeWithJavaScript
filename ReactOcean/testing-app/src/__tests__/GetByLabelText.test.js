import { render, screen } from "@testing-library/react"
import GetByLabelText from "../components/getByLabelText"

test("test get by label text", ()=>{
    render(<GetByLabelText />)
    const textBox = screen.getByLabelText('User Name')
    expect(textBox).toBeInTheDocument()
})
test("test get by label text case 2", ()=>{
    render(<GetByLabelText />)
    const checkBox = screen.getByLabelText('Skills')
    expect(checkBox).toBeChecked()
})
test("test get by label text case 3", ()=>{
    render(<GetByLabelText />)
    const inputs = screen.getAllByLabelText('Employee Name')
    for(let i=0; i<inputs.clientHeight; i++){
        expect(inputs[i]).toBeInTheDocument()
    }
})