import * as fill from '../database/index.js'

export const getTodos = () => {
const todos = fill.todos
return todos
}




// export const getSodoT = (req, res) => {
//   res.json(sodot)
// };
// export const getDoto =(req, res) => {
//   res.json (doTo)
// };

// export const getMarto =(req, res) => {
//   res.json(marTo)
// }

export const createTodo = (title, description) => {
  if (!title || !description) {
    return null;
  }
  const newTodo= {
    id: fill.todos.length + 1,
    title,
    description,
    completed: false
  }

  fill.todos.push(newTodo);
  return newTodo
}

export const getTodo = (id) => {
 const todo =fill.todos.find((todo) => todo.id === parseInt(id));
 return todo
};

export const updateTodo = (id, title, description, completed) => {
  const todo = fill.todos.find((todo) => todo.id === parseInt(id));
  if (!todo) {
    return null;}
  if (title) {
    todo.title = title;}
  if (description) {
    todo.description = description;}
  if (completed !== undefined) {
    todo.completed = completed;}
  return todo;
  }

  export const deleteTodo = (id) => {
  const index = fill.todos.findIndex((todo) => todo.id === parseInt(id));

  if (index === -1) {
    return null;}
  fill.todos.splice(index, 1);
  return 'action completed';
  }


    export const getTeddy = () =>{
      const teddy = fill.teddy
      return teddy 
    };

    export const createTeddy = (name, work) => {
      const a = { name: 'Temmy', Work: 'Dev', Age: 23 };
      const b = { name: 'Tope', Work: 'Devel', Age: 25 };
      if (!name || !work) {
      return null}
      const newTeddy = {
        A: a,
        B: b,
        name,
        work
      }
      fill.teddy.push(newTeddy)
      return newTeddy

    };




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