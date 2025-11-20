import { useState } from "react";

export type BookItemProps = {
	title: string;
	description?: string | undefined;
	image_url?: string | undefined;
};

export function BookItem(props: BookItemProps) {
	const [showDescription, setShowDescription] = useState(true);

	return (
		<div
			className="details"
			style={{
				border: "1px solid #ddd",
				borderRadius: "8px",
				padding: "16px",
				marginBottom: "16px",
				display: "flex",
				gap: "16px",
				backgroundColor: "#fff",
				boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
			}}
		>
			<div style={{ flex: 1 }}>
				<h3
					className="title"
					style={{
						margin: "0 0 12px 0",
						fontSize: "20px",
						color: "#333",
					}}
				>
					{props.title}
				</h3>

				{props.description && (
					<>
						<button
							type="button"
							onClick={() => setShowDescription(!showDescription)}
							style={{
								padding: "6px 12px",
								marginBottom: "12px",
								backgroundColor: "#4A90E2",
								color: "white",
								border: "none",
								borderRadius: "4px",
								cursor: "pointer",
								fontSize: "14px",
							}}
						>
							{showDescription ? "Hide Description" : "Show Description"}
						</button>

						{showDescription && (
							<p
								className="description"
								style={{
									margin: "0",
									color: "#666",
									lineHeight: "1.6",
									fontSize: "14px",
								}}
							>
								{props.description}
							</p>
						)}
					</>
				)}

				{!props.description && (
					<p
						className="placeholderDescription"
						style={{
							margin: "0",
							color: "#999",
							fontStyle: "italic",
							fontSize: "14px",
						}}
					>
						No description available.
					</p>
				)}
			</div>
		</div>
	);
}
