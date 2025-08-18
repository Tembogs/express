import {Router} from "express"
import { getTodos, createTodo} from "../controllers/todos.controllers.js";

const router = Router();
router.get('/', getTodos)
// router.get('/ted', getTeddy)
// router.get('/sod', getSodoT)
// router.get('/dot', getDoto)
// router.get('/mar', getMarto)

router.post('/', createTodo)
// router.post('/ted', createTeddy)
// router.post('/sod', createSodo)
// router.post('/dot', createDot)



  export default router;