import express from 'express';
const route = express.Router();
import preacherController from '../controllers/preachers.js';

route.post('/create', preacherController.create) // Crear
route.get('/', preacherController.getAll) // Todas
route.get('/:id', preacherController.getOne) // Consultar
route.put('/:id', preacherController.update) // Editar
route.delete('/:id', preacherController.delete) // Eliminar

export default route;