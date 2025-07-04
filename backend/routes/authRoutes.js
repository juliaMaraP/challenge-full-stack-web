const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const USER = {
  email: 'admin@admin.com',
  password: '123456'
};

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Credenciais inválidas' });
});

module.exports = router;
