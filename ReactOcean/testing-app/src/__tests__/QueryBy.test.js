import { render, screen } from "@testing-library/react"
import QueryBy from "../components/QueryBy"

test("queryby", () =>{
    render(<QueryBy />);
    //const div = screen.getByText("Logout");
    const div = screen.queryByText("Login")
    expect(div).not.toBeInTheDocument()
})