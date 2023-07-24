import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendEmail = async (req, res) => {
    const { email, reason } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'New request for HateGuard access',
        text: `Email From: ${email}\n ${reason}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Oops! Something went wrong.' });
    }
};

export default sendEmail;