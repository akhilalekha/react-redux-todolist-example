import React from "react";
import { Button } from "./Button";

export const TodoItem = ({ id, title, completed }) => {
	return (
		<div
			key={id}
			className="border border-gray-400 p-4 my-2 flex items-center rounded-sm"
			style={{ width: "36rem" }}
		>
			<input type="checkbox" className="mr-3" checked={completed}></input>
			<div style={{ width: "30rem" }}> {title}</div>
			<Button text="delete" color="red" />
		</div>
	);
};
