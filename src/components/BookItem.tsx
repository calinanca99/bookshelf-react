import { useState } from "react";

export type BookItemProps = {
	title: string;
	description?: string | undefined;
	imageUrl?: string | undefined;
};

export function BookItem(props: BookItemProps) {
	const [showDescription, setShowDescription] = useState(true);

	return (
		<div className="book-container">
			<div className="book-details">
				<h2>{props.title}</h2>

				{props.description && (
					<>
						<button
							type="button"
							onClick={() => setShowDescription(!showDescription)}
						>
							{showDescription ? "Hide Description" : "Show Description"}
						</button>

						{showDescription && (
							<p className="book-description">{props.description}</p>
						)}
					</>
				)}

				{!props.description && (
					<p className="book-placeholder-description">
						No description available.
					</p>
				)}
			</div>
			<div className="book-image">
				{props.imageUrl && props.imageUrl.trim() !== "" ? (
					<img
						src={props.imageUrl}
						alt={`Cover of the book "${props.title}"`}
						className="book-image-element"
					/>
				) : (
					<p className="book-image-placeholder">No image available.</p>
				)}
			</div>
		</div>
	);
}
