
import * as todosService from '../services/todos.services.js';

export const getTodos = (req, res) => {
  const todos = todosService.getTodos()
  res.json(todos)
}

export const getTeddys = (req, res)=> {
  const teddys = todosService.getTeddy()
  res.json(teddys)
}


export const createTodo = (req, res) => {
const {title, description} = req.body;
  const newTodo = todosService.createTodo(title, description);
  if(!newTodo) {
    return res.status(400).json({
      message:'title and description are required'
    })
  }

  res.status(201).json(newTodo)
}

export const createTeddys = (req, res) => {
const {name, work} = req.body;
  const newTeddys = todosService.createTeddy(name, work);
  if(!newTeddys) {
    return res.status(400).json({
      message:'name and work are required'
    })
  }

  res.status(201).json(newTeddys)
}

export const getTodo = (req, res) => {
  const {id} = req.params;
  const todo = todosService.getTodo(id);

  if(!todo) {
    return res.status(404).json({message: 'Todo not found'})
  }

  res.json(todo)
}


export const updateTodo = (req, res)=> {
  const {id} =req.params;
  const {title, description, completed}= req.body;
  const todo = todosService.updateTodo(id, title, description, completed);

  if(!todo) {
    return res.status(404).json({message: "todo not found"})
  }
  res.json(todo);
}

export const deleteTodo = (req, res) => {
  const { id } = req.params;

  const todo = todosService.deleteTodo(id);

  if (!todo) {
    return res.status(404).json({ message: "Todo does not exist" });
  }

  res.json({ message: "Todo deleted successfully", todo });
};



