import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />)
    const header = screen.getByText('React Plants')
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {

    //Arranging
    render(<CheckoutForm />)

    //Acting
    const inputs = {
        const nameInput = screen.getByText(First, Name)
    const lastInput = screen.getByText(Last, Name)
    const addressInput = screen.getByText(Address)
    const cityInput = screen.getByText(City)
    const stateInput = screen.getByText(State)
    const zipInput = screen.getByText(Zip)
    const button = screen.getAllByRole('button')

    }

    fireEvent.click(button)

    //Asserting
    const newCheckout = screen.getByText(checkout)
    expect(newAnimal).toBeInTheDocument();
});
