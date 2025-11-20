import { useState } from "react";
import { BookItem, type BookItemProps } from "./BookItem";

type BookData = BookItemProps & {
	id: number;
};

const BookList = () => {
	const [books, setBooks] = useState<BookData[]>([
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
				"Dive Into Systems is a vivid introduction to computer organization, architecture, and operating systems that is already being used as a classroom textbook at more than 25 universities.",
		},
		{
			id: 4,
			title: "Designing Data-Intensive Applications",
		},
	]);

	const addNewBook = () => {
		const newBook: BookData = {
			id: books.length + 1,
			title: `New Book ${books.length + 1}`,
		};

		setBooks([...books, newBook]);
	};

	return (
		<div
			className="container"
			style={{
				maxWidth: "1200px",
				margin: "0 auto",
				padding: "20px",
			}}
		>
			<div
				className="header"
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "24px",
				}}
			>
				<h1
					style={{
						margin: 0,
						color: "#f5f5f5",
						fontSize: "28px",
					}}
				>
					Programming books
				</h1>

				<button
					onClick={addNewBook}
					type="button"
					style={{
						padding: "10px 20px",
						backgroundColor: "#28a745",
						color: "white",
						border: "none",
						borderRadius: "4px",
						cursor: "pointer",
						fontSize: "16px",
						fontWeight: "bold",
						boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
					}}
				>
					+ Add New Book
				</button>
			</div>

			<div>
				{books.map((book) => (
					<BookItem
						key={book.id}
						title={book.title}
						description={book.description}
						image_url={book.image_url}
					/>
				))}
			</div>
		</div>
	);
};

export default BookList;
