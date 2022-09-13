import { Router } from "express";
import { methods as prodProvController } from "../controllers/prodProvController";

const router = Router();

/*======================== INVENTARIO ========================*/
//[GET]
router.get('/', prodProvController.getProdsProvs);
//[GET:id]
router.get('/:id', prodProvController.getProdProv);
//[POST]
router.post('/', prodProvController.addProdProv);
//[PUT:id]
router.put('/:id', prodProvController.putProdProv);
//[DELETE:id]
router.delete('/:id', prodProvController.deleteProdProv);

export default router;