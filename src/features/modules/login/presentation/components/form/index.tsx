import { useState } from "react";
import { Todo } from "../../../../../../types/todo";
import useAddTodo from "../../../useCases/addTodo";
import { useAppSelector } from "../../../../../../store";
import useDeleteTodo from "../../../useCases/deleteTodo";

const initialState = {
	id: Date.now().toString(),
	isActive: true,
	name: "",
};

const FormLogin = () => {
	const { todos } = useAppSelector((state) => state.todo);
	const [todo, setTodo] = useState<Todo>(initialState);
	const { handleAddTodo } = useAddTodo();
	const { handleDeleteTodo } = useDeleteTodo();

	const handleTodo = () => {
		handleAddTodo(todo);
		setTodo({
			...initialState,
			name: "",
			id: Date.now().toString(),
		});
	};
	return (
		<div className="">
			<input
				style={{
					borderWidth: 2,
				}}
				data-testid="todo-name"
				placeholder="TODO NAME"
				type="text"
				value={todo.name}
				onChange={(v) => {
					setTodo({
						...todo,
						name: v.target.value,
					});
				}}
			/>
			<button onClick={handleTodo} data-testid="add-btn">
				Add
			</button>
			<div className="">
				{todos.map((item) => (
					<div className="" key={item.id}>
						<p>{item.name}</p>
						<button
							onClick={() => handleDeleteTodo(item.id)}
							data-testid="delete-btn"
						>
							X
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default FormLogin;
