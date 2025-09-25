import { fireEvent, render, screen} from "@testing-library/react";
import App from "./App";

test("Test First React App", () =>{
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle("AI Generated img");
  const title2 = screen.getByText('Rakesh Ranjan');
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(title2).toBeInTheDocument();
})

// test("Testing Input Box", () =>{
//   render(<App />)
//   let checkInput = screen.getByRole("textbox")
//   let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
//   expect(checkInput).toBeInTheDocument();
//   expect(checkInputPlaceholder).toBeInTheDocument();
//   expect(checkInput).toHaveAttribute("name", "username")
//   expect(checkInput).toHaveAttribute("id", "userId")
//   expect(checkInput).toHaveAttribute("type", "text")
//    expect(checkInput).toHaveAttribute("value", "Rakesh Ranjan")
// })

// describe("UI test case group", ()=>{
//   test("test case 1", ()=>{
//     render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('name', 'username')
//   })
//     test("test case 2", ()=>{
//     render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('name', 'username')
//   })
//     test("test case 3", ()=>{
//     render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('name', 'username')
//   })
// })

// describe("API test case group", ()=>{
//   test("API test case 1", ()=>{
//     render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('name', 'username')
//   })
//     test("API test case 2", ()=>{
//     render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('name', 'username')
//   })
//     test("API test case 3", ()=>{
//     render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('name', 'username')
//   })
//   describe("Nested Describe API Test case group", ()=>{
//     test("API test case 4", ()=>{
//           render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('name', 'username')
//     })
//   })
// })

