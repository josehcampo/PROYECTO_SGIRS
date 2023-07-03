const { Router } = require('express');
const {
  getAllSectores,
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../controllers/usercontroller');

const userRouter = Router();

userRouter.get('/CrearUsuario/12', getAllSectores);

userRouter.get('/CrearUsuario', getAllUsers);

userRouter.get('/CrearUsuario/:id', getUser);

userRouter.post('/CrearUsuario', createUser);

userRouter.delete('/CrearUsuario/:id', deleteUser);

userRouter.put('/CrearUsuario/:id', updateUser);

module.exports = userRouter;
