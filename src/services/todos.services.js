import todos from '../database/index.js'

export const getTodos = () => {
  return todos;
}

export const createTodo = (title, description) => {
  if (!title || !description) {
    return null;
  }
  const newTodo= {
    id:todos.length + 1,
    title,
    description,
    completed: false
  }

  todos.push(newTodo);
  return newTodo
}

// export const getTeddy = (req, res) =>{
//   res.json(teddy)
// };

// export const getSodoT = (req, res) => {
//   res.json(sodot)
// };
// export const getDoto =(req, res) => {
//   res.json (doTo)
// };

// export const getMarto =(req, res) => {
//   res.json(marTo)
// }
