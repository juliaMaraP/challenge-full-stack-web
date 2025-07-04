const Student = require('../models/student');

exports.listStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch student' });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { name, email, registration, cpf } = req.body;

    if (!name || !email || !registration || !cpf) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const studentExists = await Student.findOne({ where: { registration } });
    if (studentExists) {
      return res.status(409).json({ error: 'Registration (RA) must be unique' });
    }

    const cpfExists = await Student.findOne({ where: { cpf } });
    if (cpfExists) {
      return res.status(409).json({ error: 'CPF must be unique' });
    }

    const newStudent = await Student.create({ name, email, registration, cpf });
    res.status(201).json({ message: 'Student created successfully', student: newStudent });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student' });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const { id } = req.params;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and Email are required' });
    }

    const student = await Student.findByPk(id);
    if (!student) return res.status(404).json({ error: 'Student not found' });

    // RA and CPF are not editable

    student.name = name;
    student.email = email;

    await student.save();

    res.json({ message: 'Student updated successfully', student });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student' });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    if (!student) return res.status(404).json({ error: 'Student not found' });

    await student.destroy();
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
};
