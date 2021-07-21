import { NextFunction, Request, Response } from "express";
import nodemailer from 'nodemailer';
import { Email } from "../model/email";
import { config } from "../config/config";
import { Options } from "nodemailer/lib/mailer";


export const emailSender = async (req: Request, res: Response, next: NextFunction) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: config.email.SMTP_EMAIL,
            pass: config.email.SMTP_PASSWORD,
        }
    })
    transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });
    const msg: Options = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text,
    }
    if (req.body.image) {
        msg.attachments = [
            {
                filename: req.body.image.substring(req.body.image.lastIndexOf('/' + 1)),
                path: req.body.image,
            }
        ]
    }
    transporter.sendMail(msg, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send("Something went wrong.");
        } else {
            res.status(200).send("Email successfully sent to recipient!");
        }
    })
}