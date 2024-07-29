import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Should load Contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument()
});

test("Should load Button in Contact us page",()=>{
  render(<Contact/>)
  const btn = screen.getByRole("button")
  expect(btn).toBeInTheDocument()
})

test("Should have 2 input",()=>{
  //Rendering
  render(<Contact/>)
  
  // to get all the input fields we have the methods getALLBy...

  // Querying
  const input = screen.getAllByRole("textbox")
  
  // check if we have 2 input fields or not
  // console.log(input.length)
  
  // Assertion
  expect(input.length).toBe(2)
})

test("To test with Text", ()=>{
  render(<Contact/>)
  const placeholder = screen.getAllByPlaceholderText("Enter Name...")
  console.log(placeholder.length)
  expect(placeholder.length).toBe(2)
})