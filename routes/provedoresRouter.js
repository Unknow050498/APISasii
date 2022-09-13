import { Router } from "express";
import { methods as provedoresController } from "../controllers/provedoresController";

const router = Router();

/*======================== INVENTARIO ========================*/
//[GET]
router.get('/', provedoresController.getProvedores);
//[GET:id]
router.get('/:id', provedoresController.getProvedor);
//[POST]
router.post('/', provedoresController.addProvedor);
//[PUT:id]
router.put('/:id', provedoresController.putProvedor);
//[DELETE:id]
router.delete('/:id', provedoresController.deleteProvedor);

export default router;