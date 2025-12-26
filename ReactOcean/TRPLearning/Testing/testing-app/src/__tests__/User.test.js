import { render, screen } from "@testing-library/react"
import User from "../components/User"
import userEvent from "@testing-library/user-event";

test("Props test", async()=>{
    const name="Rakesh";
    const testFunction = jest.fn();
    const user = userEvent.setup();
    render(<User name={name} testFunction={testFunction} />)
    expect(screen.getByText(name)).toBeInTheDocument()
    const btn = screen.getByRole('button');
    await user.click(btn)
    expect(testFunction).toBeCalled()
})