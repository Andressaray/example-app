import { useAppDispatch, useAppSelector } from "../../../../../store";
import { deleteTodo } from "../../../../../store/slices/todo";

const useDeleteTodo = () => {
	const dispatch = useAppDispatch();
	const { todos } = useAppSelector((state) => state.todo);
	const handleDeleteTodo = (id: string) => {
		const newTodos = todos.filter((item) => item.id !== id);
		dispatch(deleteTodo(newTodos));
	};
	return {
		handleDeleteTodo,
	};
};

export default useDeleteTodo;
