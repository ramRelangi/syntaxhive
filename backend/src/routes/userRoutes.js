const express = require('express');
const UserController = require('../controllers/userController');
const jwt = require('jsonwebtoken');

const router = express.Router();

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/:id', authenticateToken, UserController.getUser);

module.exports = router;