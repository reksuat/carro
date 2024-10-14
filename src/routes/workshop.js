import { Router } from "express";
import {
    store,
    index,
    show,
    update,
    destroy
} from "../controllers/workshop.js";

import viaCep from "../middleware/cep.js";

const router = Router();


router.post('/', viaCep, store);
router.get('/', index);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;