import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

describe("Contact Form Tests", () => {
    test("Form renders", () => {
        render(<ContactForm />);
    });
    
    
    
    test("User can type their first name", () => {
        render(<ContactForm/>);

// fill in the first name field with a reasonable name
        const firstNameInput = screen.getByLabelText(/first name/i);
        const lastNameInput = screen.getByLabelText(/first name/i);
        const emailInput = screen.getByLabelText(/first name/i);
        userEvent.type(firstNameInput, "Danny");
        userEvent.type(lastNameInput, "Dannington");
        userEvent.type(emailInput, "dan@dan.com");
    
// unfocus the first name field (e.g. type "\t"?)
        //userEvent.tab();
        
// check that the first name maxLength validator isn't visible
        userEvent.click(screen.getByRole("button"));

        //const item = screen.getByText("Looks like there was an error: maxLength");
        
       // expect(item).toBe("Looks like there was an error: maxLength");

    })
})

