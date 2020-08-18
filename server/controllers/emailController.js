const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();


module.exports = {
    sendEmail: async (req, res) => {
        const {message, email} = req.body;
        let transporter = nodemailer.createTransport({
            host: "imap.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'nodemailerinc@gmail.com',
                pass: 'devCamp20',
            },
            tls: {rejectUnauthorized: false}
            });
            let info = await transporter.sendMail({
            from: '"socailApp" <nodemailerinc@gmail.com>',
            to: `User, ${email}`,
            subject: "Welcome!",
            text: "",
            html: `<span>${message}</span>`
        });
    }
}