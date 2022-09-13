import { Router } from "express";
import { methods as inventarioController } from "../controllers/inventarioController";

const router = Router();

/*======================== INVENTARIO ========================*/
//[GET]
router.get('/', inventarioController.getInventarios);
//[GET:id]
router.get('/:id', inventarioController.getInventario);
//[POST]
router.post('/', inventarioController.addInventario);
//[PUT:id]
router.put('/:id', inventarioController.putInventario);
//[DELETE:id]
router.delete('/:id', inventarioController.deleteInventario);

export default router;