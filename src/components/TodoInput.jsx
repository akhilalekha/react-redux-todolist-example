import { useState } from "react";
import { Button } from "./Button";

export const TodoInput = () => {
	const [input, setInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setInput(e.target.value);
		// console.log(e.target.value);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="flex justify-center items-center"
			>
				<input
					type="text"
					name="todoinput"
					value={input}
					onChange={handleChange}
					placeholder="add an item"
					style={{ width: "30rem" }}
					className="h-10 mr-4 my-4 p-2 border border-gray-400 rounded-sm"
				/>
				<Button text={"Add"} color={"blue"} />
			</form>
		</>
	);
};
