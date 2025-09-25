import { render, screen } from "@testing-library/react";
import Users from "../components/Users";

test("renders Users component", () => {
  render(<Users />);
  expect(screen.getByText(/Users Class Component/i)).toBeInTheDocument();
});