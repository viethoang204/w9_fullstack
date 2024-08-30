const authMiddleware = (req, res, next) => {
    if (req.signedCookies.user) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

module.exports = authMiddleware;
