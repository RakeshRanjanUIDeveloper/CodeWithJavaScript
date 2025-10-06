import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import UserEvent from "../components/UserEvent";

test("click event with user event", async()=>{
    userEvent.setup();
    render(<UserEvent />)
    const btn = screen.getByText('Click Me');
    await userEvent.click(btn);
    expect(screen.getByText('Hello')).toBeInTheDocument();
})