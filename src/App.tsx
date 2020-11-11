import React,{useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';




const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const todoAddHandler = (text: string) => {
    setTodos(PrevTodos => [...PrevTodos,{id: Math.random().toString(), text: text}])
  }
  const TodoDeleteHandler = (todoId: string) => {
    setTodos(PrevTodos => PrevTodos.filter(todo => todo.id !== todoId))
  }
  return (
    <div className="App">
      <NewTodo onTodoAdd={ todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={ TodoDeleteHandler}/>
    </div>
  );
}

export default App;
