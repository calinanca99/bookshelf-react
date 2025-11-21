import { useState } from "react";
import type { Book } from "../types/book";

const initialBooks: Book[] = [
	{
		id: 1,
		title: "Eloquent JavaScript",
		description:
			"This is a book about JavaScript, programming, and the wonders of the digital.",
	},
	{
		id: 2,
		title: "Total TypeScript",
		description:
			"become a TypeScript wizard and build a TypeScript application from scratch.",
	},
	{
		id: 3,
		title: "Dive Into Systems",
		description:
			"Dive Into Systems is a vivid introduction to computer organization, architecture, and operating systems.",
	},
	{
		id: 4,
		title: "Designing Data-Intensive Applications",
	},
];

export function useBooks() {
	const [books, setBooks] = useState<Book[]>(initialBooks);

	const addBook = () => {
		const newBook: Book = {
			id: books.length + 1,
			title: `New Book ${books.length + 1}`,
		};

		setBooks((prev) => [...prev, newBook]);
	};

	return {
		books,
		addBook,
	};
}
