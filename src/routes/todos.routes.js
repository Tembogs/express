import {Router} from "express"
import { getTodos, createTodo, getTeddys, createTeddys, updateTodo, deleteTodo, getTodo} from "../controllers/todos.controllers.js";


const router = Router();
router.get('/', getTodos)
router.get('/:id', getTodo)
router.get('/ted', getTeddys)
// router.get('/sod', getSodoT)
// router.get('/dot', getDoto)
// router.get('/mar', getMarto)

router.post('/', createTodo)
router.post('/ted', createTeddys)
// router.post('/sod', createSodo)
// router.post('/dot', createDot)

router.put('/:id', updateTodo)

router.delete('/:id', deleteTodo)

  export default router;