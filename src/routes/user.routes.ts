import { Router } from "express";
import {create, list, update, remove, getById} from '../controllers/user.controller'; 
import { validate } from '../middlewares/validate.middleware';
import { createUserSchema, updateUserSchema } from '../schemas/user.schema';

const router = Router();



// Forma 1 rota sem validador Zod
//Permitido Senhas fracas, email sem @, campos vazios etc...


// router.post('/', create);
// router.get('/', list);
// router.put('/:id', update);
// router.delete('/:id', remove);
// router.get('/:id', getById);

// Forma 2 rota com validador Zod
router.post('/', validate(createUserSchema), create); // <-- validação para criação de novos users
router.get('/', list);
router.put('/:id', validate(updateUserSchema), update); // <-- validação para atualização de users
router.get('/:id', getById);










export default router;
