import { useSelector } from "react-redux";

import { TodoItem } from "./TodoItem";

export const ListItems = () => {
	// useSelector to get the state from store
	const todos = useSelector((state) => state.todos);
	const completedTodos = todos.filter((todo) => todo.completed === true);
	const test = useSelector();
	console.log(test);

	return (
		<>
			<ul className="">
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
					/>
				))}
			</ul>
			<div>
				Total completed items: {completedTodos.length} / {todos.length}
			</div>
		</>
	);
};
