import { useState } from "react";

export type BookItemProps = {
	title: string;
	description?: string | undefined;
	imageUrl?: string | undefined;
};

export function BookItem(props: BookItemProps) {
	const [showDescription, setShowDescription] = useState(true);

	const getImageUrl = () => {
		if (props.imageUrl && props.imageUrl.trim() !== "") {
			return {
				url: props.imageUrl,
				description: `Cover of the book "${props.title}"`,
			};
		}
		return {
			url: "https://kagi.com/proxy/images?c=_m3km2RjA3G0qleowsZXHZb9NEn0fSsEYIHbKzMDyAFb4nUPIanknmQV_g0rmdCIPtxJEJaaE88a4q7dCGxCQBT3N7ASd8GMDxF58mhBbOgD6OxSMFK3_Bb34vY3Qcttk2YAWaVM43QM8ZMYbSBu6A%3D%3D",
			description: "Icon of a book with orange cover",
		};
	};

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
				<img
					src={getImageUrl().url}
					alt={getImageUrl().description}
					className="book-image-element"
				/>
			</div>
		</div>
	);
}
