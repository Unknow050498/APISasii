import { Router } from "express";
import { methods as vendedoresController } from "../controllers/vendedoresController";

const router = Router();

/*======================== INVENTARIO ========================*/
//[GET]
router.get('/', vendedoresController.getVendedores);
//[GET:id]
router.get('/:id', vendedoresController.getVendedor);
//[POST]
router.post('/', vendedoresController.addVendedor);
//[PUT:id]
router.put('/:id', vendedoresController.putVendedor);
//[DELETE:id]
router.delete('/:id', vendedoresController.deleteVendedor);

export default router;