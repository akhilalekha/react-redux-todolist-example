import "./App.css";
import { ListItems } from "./components/ListItems";
import { TodoInput } from "./components/TodoInput";

function App() {
	return (
		<div className="m-8 flex flex-col items-center">
			<div className="w-2/3 flex flex-col items-center px-10">
				<header className="text-2xl font-semibold text-blue-600">
					Todolist
				</header>
				<TodoInput />
				<ListItems />
			</div>
		</div>
	);
}

export default App;
