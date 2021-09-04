export const Button = ({ text, color, handleDelete }) => {
	return (
		<button
			type="submit"
			className={`${color === "blue" && "bg-blue-700"} ${
				color === "red" && "bg-red-500"
			} text-white w-20 p-2 rounded-sm`}
			onClick={handleDelete}
		>
			{text}
		</button>
	);
};
