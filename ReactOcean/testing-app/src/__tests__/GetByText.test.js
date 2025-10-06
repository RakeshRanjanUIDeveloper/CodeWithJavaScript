import { render, screen } from "@testing-library/react"
import GetByText from "../components/GetByText"

test("single button testing", ()=>{
    render(<GetByText />)
    const button = screen.getByText('Login', {exact:false});
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('mybtn');
    expect(button).not.toHaveClass('s');
    const div = screen.getByText((content, element) => content.startsWith("Hello"));
    expect(div).toBeInTheDocument();
})