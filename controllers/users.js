import userModel from '../models/users.js'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASSWORD_MAIL
    }
});



let mail = {
    from: process.env.USER_MAIL,
    to: "codezardi@gmail.com",
    subject: "Este es mi asunto pe",
    text: "Este es una prueba de texto",
    html: `<h5>Hi, this is a new Email from Nodemailer.</h5>`
}


class userController {
    constructor() {
        
    }
    async sendMail(req, res) {
        try {
            console.log(req.body)
            res.status(201).json({status: 'SENDMAIL-OK'})
            // transporter.sendMail(mail, (error, info) => {
            //     if(error) {
            //         console.error("Error sending email: ", error);
            //     } else {
            //         console.log("Email sent.");
            //     }
            // })
        } catch (error) {
            res.status(500).json({status: 'ERROR'})
        }
    }
    async create(req, res) {
        try {
            const data = await userModel.create({
                name: req.body.email,
                email: req.body.email,
                password: req.body.pass
            });
            await res.status(201).json(data)
        } catch (error) {
            res.status(500).json({status: false, message: 'ERROR'})
        }
    }
    async update(req, res) {
        try {
            res.status(201).json({status: 'UPDATE-OK'})
        } catch (error) {
            res.status(500).json({status: 'ERROR'})
        }
    }
    async delete(req, res) {
        try {
            res.status(201).json({status: 'DELETE-OK'})
        } catch (error) {
            res.status(500).json({status: 'ERROR'})
        }
    }
    async getAll(req, res) {
        try {
            res.status(201).json({status: 'GETALL-OK'})
        } catch (error) {
            res.status(500).json({status: 'ERROR'})
        }
    }
    async getOne(req, res) {
        try {
            res.status(201).json({status: 'GETONE-OK'})
        } catch (error) {
            res.status(500).json({status: 'ERROR'})
        }
    }
    async login(req, res) {
        try {
            const data = await userModel.login({
                email: req.body.email,
                password: req.body.pass
            });
            await res.status(201).json(data)
        } catch (error) {
            res.status(500).json({status: false, message: 'ERROR'})
        }
    }
    

   
}
export default new userController();