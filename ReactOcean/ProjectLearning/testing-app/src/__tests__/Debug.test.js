import { render, screen, prettyDOM, logRoles } from "@testing-library/react"
import Debug from "../components/Debug"


test("debug", ()=>{
   const {container, debug} = render(<Debug />)
   //const el = screen.getByText("Heading 3");
    //expect(el).toBeInTheDocument();
   // console.log(container)
    //console.log(prettyDOM(container))
    //debug()
    logRoles(container)
})