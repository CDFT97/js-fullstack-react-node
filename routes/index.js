const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/PacienteController');

module.exports = () => {

    // Agrega nuevos pacientes via POST
    router.post('/pacientes', pacienteController.nuevoCliente);

    // Obtiene todos los registros de pacientes en la DB
    router.get('/pacientes', pacienteController.obtenerPacientes);

    // Obtiene paciente por su ID
    router.get('/paciente/:id', pacienteController.obtenerPaciente);

    // Actualizar un registro
    router.put('/paciente/:id', pacienteController.actualizarPaciente);

    // Elimina un paciente por su id
    router.delete('/paciente/:id', pacienteController.eliminarPaciente);

    return router;
}