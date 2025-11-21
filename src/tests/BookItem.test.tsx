import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BookItem } from "../components/BookItem";

describe("BookItem", () => {
	it("renders placeholder description when 'description' is missing", () => {
		render(<BookItem title="Test Book" />);

		expect(screen.getByText("No description available.")).toBeInTheDocument();
	});

	it("renders placeholder image when imageUrl is missing", () => {
		render(<BookItem title="Test Book" />);

		const img = screen.getByRole("img");

		expect(img).toHaveAttribute("src");
		expect(img.getAttribute("src")).toContain("https://kagi.com/proxy/images");
	});

	it("renders placeholder image text when image fails to load", () => {
		render(<BookItem title="Broken Image Book" imageUrl="http://bad.url" />);

		const img = screen.getByRole("img");

		fireEvent.error(img);

		expect(screen.getByText("No image available.")).toBeInTheDocument();
	});
});
