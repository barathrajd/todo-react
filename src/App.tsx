import { useCallback, useState } from 'react';
import { TodoForm } from './components';

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const updateTodoList = useCallback(
    (todo: string) => {
      setTodoList((previous) => [...previous, todo]);
    },
    [todoList]
  );

  return (
    <div className='container'>
      <h3 className='text-center'>Todo</h3>
      <TodoForm updateTodoList={updateTodoList} />
      {todoList.map((todo, index) => (
        <li key={todo + `${index}`}>{todo}</li>
      ))}
    </div>
  );
}

export default App;
