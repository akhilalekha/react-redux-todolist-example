import { TodoItem } from "./TodoItem";

export const ListItems = () => {
	const todos = [
		{
			id: 1,
			title: "todo1",
			completed: false
		},
		{ id: 2, title: "todo2", completed: false },
		{ id: 3, title: "todo3", completed: true },
		{ id: 4, title: "todo4", completed: false },
		{ id: 5, title: "todo5", completed: false }
	];

	return (
		<>
			<ul className="">
				{todos.map((todo) => (
					<TodoItem
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
					/>
				))}
			</ul>
			<div>Total completed items: </div>
		</>
	);
};
