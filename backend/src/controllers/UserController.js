const User = require('../models/User');

const create = async (req, res) => {
    try {
        const userData = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
        }
        const user = await User.create(userData);
        return res.status(201).json({ message: "Usuário cadastrado.", user: user });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};

module.exports = {
    create
};