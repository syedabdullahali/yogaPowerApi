const router = require('express').Router();
//modelName
const bcrypt = require('bcrypt');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');
router.post('', async function (req, res) {
    try {
        let { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                res.status(400).send("Password not matched");
            } else {
                console.log("User loged in");
                const token = jwt.sign({ _id: user._id, email: user.email, dashboardAccess: user.dashboardAccess, center: user.center, centerCode: user.centerCode, }, 'sdiohufvhbiehhidethisthing', {
                    expiresIn: '45h'
                });
                res.header("auth-token", token).send({
                    token, user: {
                        username: user.username,
                        email: user.email,
                        dashboardAccess: user.dashboardAccess,
                        center: user.center,
                        centerCode: user.centerCode,
                    }
                });
            }
        } else {
            res.status(404).json({ message: 'User not found, Please Signup' })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: err })
    }
});
module.exports = router;