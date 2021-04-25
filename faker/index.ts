import axios from 'axios';

const url =  'https://jsonplaceholder.typicode.com/todos/1'; 

// This is used to define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
};
//


// API Request 
axios.get(url).then(response => {
  const todo = response.data as Todo;

  const ID = todo.id; 
  const title = todo.title;
  const finished = todo.completed;

  console.log(`
    The todo with the ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `); 
});