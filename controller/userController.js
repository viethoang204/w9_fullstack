const bcrypt = require('bcryptjs');
const { hashPassword, comparePassword } = require('../utils/bcryptUtils');

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && await comparePassword(password, user.password)) {
        res.cookie('user', user.username, { signed: true });
        res.send(`Welcome back, ${user.username}!`);
    } else {
        res.status(401).send('Invalid credentials');
    }
};

module.exports = { welcomeUser, loginUser };
