import { render } from "@testing-library/react"
import Snapshot from "../components/Snapshot"

test("snapshot for snapshot component", ()=>{
    const { asFragment } = render(<Snapshot />);
    expect(asFragment()).toMatchSnapshot();

})