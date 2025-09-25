import { fireEvent, render, screen } from "@testing-library/react"
import Button from "../components/Button"

test("Test click Event with button", ()=>{
    render(<Button />)
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement)
    expect(screen.getByText('Updated Data!!')).toBeInTheDocument()
})