import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ITodo {
  'userId': number;
  'id': number;
  'title': string;
  'completed': boolean;
}

export async function loader(): Promise<ITodo[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<ITodo[]>;
}

export const TasksList: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);

  useEffect(() => {
    async function getData() {
      const collection = await loader();
      collection.length = 7;
      setTodos(collection);
    }

    getData();
  }, []);

  return (
    <div>
      {todos.map(({ id, userId, title }) => (
        <div key={id}>
          <Link to={`/task_form/${id}`} state={{ userId, id, title }}>
            Перейти к задаче
          </Link>
          <p>{`User id:${userId}, title:${title}`}</p>
        </div>
      ))}
    </div>
  );
};
