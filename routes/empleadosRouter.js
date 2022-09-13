import { Router } from "express";
import { methods as empleadosController } from "../controllers/empleadosController";

const router = Router();

/*======================== EMPLEADOS ========================*/
//[GET]
router.get('/', empleadosController.getEmpleados);
//[GET:id]
router.get('/:id', empleadosController.getEmpleado);
//[POST]
router.post('/', empleadosController.addEmpleado);
//[PUT:id]
router.put('/:id', empleadosController.putEmpleado);
//[DELETE:id]
router.delete('/:id', empleadosController.deleteEmpleado);

export default router;