import { render, screen } from "@testing-library/react"
import KeyBoardInteraction from "../components/KeyBoardInteraction"
import userEvent from "@testing-library/user-event";

test("KeyBoardInteraction", async()=>{
    userEvent.setup()
    render(<KeyBoardInteraction />);
    const el = screen.getByRole('textbox');
    await userEvent.type(el, "rakesh");
    expect(screen.getByText('rakesh')).toBeInTheDocument()

})