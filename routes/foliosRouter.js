import { Router } from "express";
import { methods as foliosController } from "../controllers/foliosController";

const router = Router();

/*======================== INVENTARIO ========================*/
//[GET]
router.get('/', foliosController.getFolios);
//[GET:id]
router.get('/:id', foliosController.getFolio);
//[POST]
router.post('/', foliosController.addFolio);
//[PUT:id]
router.put('/:id', foliosController.putFolio);
//[DELETE:id]
router.delete('/:id', foliosController.deleteFolio);

export default router;