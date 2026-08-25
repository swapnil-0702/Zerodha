import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Landing_page/home/Hero";

describe("Hero Component", () => {

    test("renders hero image", () => {
        render(<Hero />);

        const heroImage = screen.getByAltText("Hero Image");

        expect(heroImage).toBeInTheDocument();

        expect(heroImage).toHaveAttribute(
            "src",
            "media/images/homeHero.png"
        );
    });

    test("renders heading", () => {
        render(<Hero />);

        const heading = screen.getByText("Invest in everything");

        expect(heading).toBeInTheDocument();
    });

    test("renders description", () => {
    render(<Hero />);

    const description = screen.getByText(
        "Online platform to Invest in stock, derivatives, mutual funds, and more"
    );

    expect(description).toBeInTheDocument();
});

test("renders SignUp Now button", () => {
    render(<Hero />);

    const button = screen.getByRole("button", {
        name: "SignUp Now"
    });

    expect(button).toBeInTheDocument();
});

});