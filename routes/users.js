import express from 'express';
const route = express.Router();
import userController from '../controllers/users.js';

route.post('/login', userController.login) // login
route.post('/sendMail', userController.sendMail) // sendMail
route.post('/create', userController.create) // Crear
route.get('/', userController.getAll) // Todas
route.get('/:id', userController.getOne) // Consultar
route.put('/:id', userController.update) // Editar
route.delete('/:id', userController.delete) // Eliminar

export default route;