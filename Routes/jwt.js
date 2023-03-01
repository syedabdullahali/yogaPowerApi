const jwt = require('jsonwebtoken')
module.exports = function (req, res, next) {
    const token = req.header('Authorization')
    if (!token) {
        res.status(401).json({ error: "Access denied" })
    }
    try {
        const verify = jwt.verify(token.split(' ')[1], 'sdiohufvhbiehhidethisthing')
        req.user = verify
        next()
    } catch (err) {
        res.status(400).json({ error: 'Invalid Token' + err })
    }
}