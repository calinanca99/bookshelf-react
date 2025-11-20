import { useState } from "react";
import { BookItem, type BookItemProps } from "./BookItem";

type Book = BookItemProps & {
	id: number;
};

const BookList = () => {
	const [books, setBooks] = useState<Book[]>([
		{
			id: 1,
			title: "The Great Gatsby",
			description:
				"A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream through the eyes of narrator Nick Carraway.",
		},
		{
			id: 2,
			title: "To Kill a Mockingbird",
			description:
				"A powerful story of racial injustice and childhood innocence in the American South during the 1930s.",
		},
		{
			id: 3,
			title: "1984",
			description:
				"George Orwell's dystopian masterpiece about totalitarianism, surveillance, and the manipulation of truth in a future society.",
		},
		{
			id: 4,
			title: "Mystery Book",
		},
	]);

	const addNewBook = () => {
		const newBook: Book = {
			id: books.length + 1,
			title: `New Book ${books.length + 1}`,
			description: "This is a newly added book.",
		};

		setBooks([...books, newBook]);
	};

	return (
		<div
			style={{
				maxWidth: "800px",
				margin: "0 auto",
				padding: "20px",
			}}
		>
			<div
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
					Books Collection
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
