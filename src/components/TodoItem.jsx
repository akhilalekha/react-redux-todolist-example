import React from "react";
import { Button } from "./Button";
import { toggleComplete, deleteTodo } from "../state/todoSlice";
import { useDispatch } from "react-redux";

export const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const handleComplete = () => {
		dispatch(
			toggleComplete({
				id: id,
				completed: !completed
			})
		);
	};

	const handleDelete = () => {
		// console.log("handle delete");
		dispatch(
			deleteTodo({
				id: id
			})
		);
	};
	return (
		<div
			className="border border-gray-400 p-4 my-2 flex items-center rounded-sm"
			style={{ width: "36rem" }}
		>
			<input
				type="checkbox"
				className="mr-3"
				checked={completed}
				onChange={handleComplete}
			></input>
			<div style={{ width: "30rem" }}> {title}</div>
			<Button text="delete" color="red" handleDelete={handleDelete} />
		</div>
	);
};
