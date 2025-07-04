const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.listStudents);       // Listar todos os alunos
router.get('/:id', studentController.getStudentById);  // Buscar aluno pelo ID
router.post('/', studentController.createStudent);     // Criar aluno
router.put('/:id', studentController.updateStudent);    // Atualizar aluno
router.delete('/:id', studentController.deleteStudent); // Deletar aluno

module.exports = router;
