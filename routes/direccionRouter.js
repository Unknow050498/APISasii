import { Router } from "express";
import { methods as direccionController } from "../controllers/direccionController";

const router = Router();

/*======================== direccion ========================*/
//[GET]
router.get('/', direccionController.getDirecciones);
//[GET:id]
router.get('/:id', direccionController.getDireccion);
//[POST]
router.post('/', direccionController.addDireccion);
//[PUT:id]
router.put('/:id', direccionController.putDireccion);
//[DELETE:id]
router.delete('/:id', direccionController.deleteDireccion);

export default router;