import { useAppDispatch } from "../../../../../store";
import { addTodo } from "../../../../../store/slices/todo";
import { Todo } from "../../../../../types/todo";

const useAddTodo = () => {
	const dispatch = useAppDispatch();
	const handleAddTodo = (todo: Todo) => {
		dispatch(addTodo(todo));
	};
	return {
		handleAddTodo,
	};
};

export default useAddTodo;
