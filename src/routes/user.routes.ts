import { Router } from "express";
import {create, list, update, remove, getById} from '../controllers/user.controller'; 

const router = Router();

router.post('/', create);
router.get('/', list);
router.put('/:id', update);
router.delete('/:id', remove);
router.get('/:id', getById);

export default router;
