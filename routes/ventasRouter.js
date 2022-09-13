import { Router } from "express";
import { methods as ventasController } from "../controllers/ventasController";

const router = Router();

/*======================== INVENTARIO ========================*/
//[GET]
router.get('/', ventasController.getVentas);
//[GET:id]
router.get('/:id', ventasController.getVenta);
//[POST]
router.post('/', ventasController.addVenta);
//[PUT:id]
router.put('/:id', ventasController.putVenta);
//[DELETE:id]
router.delete('/:id', ventasController.deleteVenta);

export default router;