import { render, screen } from "@testing-library/react"
import GetByText from "../components/GetByText"

test("single button testing", ()=>{
    render(<GetByText />)
    const button = screen.getByText('Login');
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('mybtn');
})