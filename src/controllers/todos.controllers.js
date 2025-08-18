// import {todos, teddy, sodot, doTo,marTo } from '../database/index.js';
import * as todosService from '../services/todos.services.js';

export const getTodos = (req, res) => {
  const todos = todosService.getTodos()
  res.json(todos)
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



// export const createTodos = (req, res) => {
//   const {title, description} = req.body
//   let newItem = {
//     title: title,
//     description: description
//   }
//   todos.push(newItem);
//     res.json({
//       message:'new item created',
//       time: new Date().toLocaleTimeString()
//     });
// };


// export const createTeddy = (req, res) => {
//   const a = { name: 'Temmy', Work: 'Dev', Age: 23 };
//   const b = { name: 'Tope', Work: 'Devel', Age: 25 };
//   const fill = [a,b]
//   teddy.push(fill)
// res.json({
//   a: fill,
//   b: `The first participant name is ${b.name} and his details are as follows: Speciality: ${b.Work} age: ${b.Age}`,
//   c: `The Second participant name is ${a.name} and his details are as follows: Speciality: ${a.Work} age: ${a.Age}`,
// })
// };


// export const createSodo = (req, res)=> {
//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//   const day =  days[new Date().getDay()];
//   const time = new Date().toLocaleDateString()
//   let date = 
//    {
//      day: day,
//      Date: time,
//    }
//  sodot.push(date);

//  res.json({
//    words: `The date for today is ${time} and the day of the weeek as of today is ${day}`
//  })
// }

// export const createDot = (req, res)=> {
//   const Timer = Math.floor(Math.random() * 100000)
//   const encoded= btoa('Welcome back guest')
//   const decode= atob(encoded)

//   let code = {
//     coded:encoded,
//     meaning:decode
//   }

//   doTo.push(code)
//   res.json({
//     SessionCode:`Your session code is ${Timer}`,
//     PassCode: encoded,
//     reveal: decode,
   
//   })
// }
