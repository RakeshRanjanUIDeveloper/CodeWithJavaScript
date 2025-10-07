import { render, screen, within } from "@testing-library/react"
import FindBy from "../components/FindBy"

test("findBY", async()=>{
    render(<FindBy />)
    const element = await screen.findByText("Data Found", {}, {timeout: 5000});
    expect(element).toBeInTheDocument()

    const el = screen.getByText('Within check');
    const subel = within(el).getByText('Hi');
    expect(subel).toBeInTheDocument()
})