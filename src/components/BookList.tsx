import { useBooks } from "../hooks/useBooks";
import { BookItem } from "./BookItem";

const BookList = () => {
	const { books, addBook } = useBooks();

	return (
		<div className="books-container">
			<header className="books-container-header">
				<h1>Programming books</h1>

				<button onClick={addBook} type="button">
					+ Add New Book
				</button>
			</header>

			<section>
				{books.map((book) => (
					<article key={book.id}>
						<BookItem
							title={book.title}
							description={book.description}
							imageUrl={book.imageUrl}
						/>
					</article>
				))}
			</section>
		</div>
	);
};

export default BookList;
