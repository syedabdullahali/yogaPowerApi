const express = require('express')
const router = express.Router()
const nodemailer = require("nodemailer")

router.post('/email', async (req, res) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'yogpowerinternational@gmail.com',
                pass: 'rwezsnhmbbfummcs'
            }
        });
        let mailOptions = {
            from: 'yogpowerinternational@gmail.com',
            to: req.body.client,
            subject: req.body.subject,
            text: require.body.message,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return res.status(500).json({ error: error })
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).json(info.response);
            }
        });
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

module.exports = router