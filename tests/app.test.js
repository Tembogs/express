import request  from "supertest";
import { todos } from "../src/database/index.js";

import app from "../src/app.js";

// test added

describe ('Todos Api', ()=> {
  beforeEach(() => {
    // clear the todos array before each test
    todos.length = 0;
  })

  describe('GET /todos', () => {
    it ("should return an empty array when no todos exist", async ()=> {
      const response = await request(app).get('/api/todos');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    })
  })

  describe('POST /todos', () => {
    it('should create a new todo', async () => { 
      const newTodo = { title: 'Test Todo', description: 'This is a test todo' };
      const response = await request(app).post('/api/todos').send(newTodo)
      expect(response.status).toBe(201);
      expect(response.body.title).toBe(newTodo.title);
      expect(response.body.description).toBe(newTodo.description);
      expect(response.body.completed).toBe(false);
      expect(todos.length).toBe(1);
    })

    it('should not create a todo without title', async () => {
      const newTodo = { description: 'This is a test todo without title' };
      const response = await request(app).post('/api/todos').send(newTodo);
      expect(response.status).toBe(400);
      expect(response.body.message).toBe('title and description are required');
    })
  })

  describe('GET /api/todos/:id', () => {
    it('should get a single todo by id', async () => {
      const newTodo = {id:1, title: 'testing the new todo', description: 'working on the new todo', completed: false};
      todos.push(newTodo);
      const response = await request(app).get('/api/todos/1');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(newTodo)
    })

    it ('should return 404 if todo not found', async () => {
      const response = await request(app).get('/api/todos/999');
      expect(response.status).toBe(404);
      expect(response.body.message).toBe('Todo not found');
    })
  
  })

  describe('PUT /api/todos/:id', () => {
    it('update todo', async () => {
      const newTodo = {id:1, title: 'old title', description:"old description", completed: false}
      todos.push(newTodo);
      const updateTodo = {title:'new title', description: 'new description', completed:true}
      const response = await request(app).put('/api/todos/1').send(updateTodo);
      expect(response.status).toBe(200);
      expect(response.body.title).toBe(updateTodo.title);
      expect(response.body.description).toBe(updateTodo.description);
      expect(response.body.completed).toBe(updateTodo.completed);
    })

    it('should return 404 if todo to update not found', async () => {
      const updateTodo = {title:'new title', description: 'new description', completed:true}
      const response = await request(app).put('/api/todos/99').send(updateTodo);
      expect(response.status).toBe(404);
      expect(response.body.message).toBe('todo not found');
    })
  })

  describe('DELETE /api/todos/:id', () => {
    it ('should delete a todo', async () => {
      const newTodo = {id:1, title: "Test todo", description: "test descriptuon", completed: false}
      todos.push(newTodo);
      const response = await request(app).delete('/api/todos/1');
      expect(response.status).toBe(200);
      expect(todos.length).toBe(0);
    })

    it('should return 404 if todo to delete not found', async () => {
      const response = await request(app).delete('/api/todos/99');
      expect(response.status).toBe(404);
      expect(response.body.message).toBe('Todo does not exist');
    })
  })
})


      
  