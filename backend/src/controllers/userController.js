const UserService = require('../services/UserService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserController {
    static async getUser(req, res) {
        try {
            const { id } = req.params;
            const user = await UserService.getUserById(id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await UserService.createUser({ name, email, password });
            res.json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserService.findUserByEmail(email);
            if (!user) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = UserController;