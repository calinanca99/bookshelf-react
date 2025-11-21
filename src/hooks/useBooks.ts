import { useState } from "react";
import type { Book } from "../types/book";

const initialBooks: Book[] = [
	{
		id: 1,
		title: "Eloquent JavaScript",
		description:
			"This is a book about JavaScript, programming, and the wonders of the digital.",
		imageUrl:
			"https://kagi.com/proxy/cover.jpg?c=JWuNkbs59nQ7cbBU3ss0DNWsYVU_AM7p6doL0A-TyL_TTvd66H4VfdWXcLA_3Y8ZIKlAr6atopLIoWrBBgNTOQ%3D%3D",
	},
	{
		id: 2,
		title: "Total TypeScript",
		description:
			"Become a TypeScript wizard and build a TypeScript application from scratch.",
		imageUrl:
			"https://kagi.com/proxy/715g4iA9nwL._UF1000,1000_QL80_.jpg?c=CXPfL3-FqybbvZNQU82_BGSCqYZMz5YT_CgNKn5TDDXn3uQeC85nTFIYV8KaIBrFOFLqTgsYKZhPUjD89JTn45ZdLWsdrVAIE_KU4dPb4SijGP1voTp5cvUxNDHmMdPI",
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
		imageUrl: "https://brokenurlisverybroken.wow",
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
