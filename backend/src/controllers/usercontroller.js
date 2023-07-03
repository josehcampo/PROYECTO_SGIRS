const pool = require('../db');

// FUNCIÓN PARA CONSULTAR TODOS LOS SECTORES

const getAllSectores = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM sectores');
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

// FUNCIÓN PARA CONSULTAR TODOS LOS USUARIOS

const getAllUsers = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

// FUNCIÓN PARA COONSULTAR UN USUARIO POR ID

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    if (result.rows.length === 0)
      return res.status(404).json({
        message: 'Usuario no encontrado',
      });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

// FUNCIÓN PARA CREAR UN USUARIO

const createUser = async (req, res, next) => {
  const {
    nit,
    idsector,
    nomestablecimiento,
    direccion,
    comuna,
    barrio,
    email,
    nomresponsable,
    numero,
    password,
  } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (nit, idsector, nomestablecimiento, direccion, comuna, barrio, email, nomresponsable, numero, password) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [
        nit,
        idsector,
        nomestablecimiento,
        direccion,
        comuna,
        barrio,
        email,
        nomresponsable,
        numero,
        password,
      ]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

// FUNCIÓN PARA ELIMINAR UN USUARIO

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    if (result.rowCount === 0)
      return res.status(404).json({
        message: 'Usuario no encontrado',
      });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

// FUNCIÓN PARA ACTUALIZAR UN USUARIO

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      nit,
      idsector,
      nomestablecimiento,
      direccion,
      comuna,
      barrio,
      email,
      nomresponsable,
      numero,
      password,
    } = req.body;

    const result = await pool.query(
      'UPDATE users SET nit = $1, idsector = $2, nomestablecimiento = $3, direccion = $4, comuna = $5, barrio = $6, email = $7, nomresponsable = $8, numero = $9, password = $10,  WHERE id = $12 RETURNING *',
      [
        nit,
        idsector,
        nomestablecimiento,
        direccion,
        comuna,
        barrio,
        email,
        nomresponsable,
        numero,
        password,
        id,
      ]
    );

    if (result.rows.length === 0)
      return res.status(404).json({
        message: 'usuario no encontrado',
      });

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//

module.exports = {
  getUser,
  getAllSectores,
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
};
