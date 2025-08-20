import express from 'express'
import todoRoutes from './routes/todos.routes.js'
import setupMiddlewares from './middlewares/index.js'

const app = express()
setupMiddlewares(app);

app.get('/', (req, res) => {
  res.json({
    message: 'welcome to the todo list api',
    timestamp: new Date().toLocaleTimeString(),
  })
})

app.use('/api/todos', todoRoutes)


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

export default app;