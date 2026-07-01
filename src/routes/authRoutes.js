const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const protegerRota = require('../middlewares/authMiddleware');

router.get('/publica', authController.rotaPublica);

router.post('/login', authController.login);

router.get(
    '/protegida',
    protegerRota,
    authController.rotaProtegida
);

router.get('/status', authController.status);

router.post('/logout', authController.logout);

module.exports = router;