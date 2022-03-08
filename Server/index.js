const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require("cors");
const app = express();
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(express.json())

const route = express.Router();

const port = process.env.PORT || 5000;

app.use(cors());

app.use('/v1', route);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


const transporter = nodemailer.createTransport({
    port: 2525,
    host: "smtp.gmail.com",
    auth: {
        user: 'sampathkaali002@gmail.com',
        pass: 'sam_sri002',
    },
    tls: {
        ciphers:'SSLv3'
    },
    service: "Outlook365",
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

route.post('/text-mail', (req, res) => {

    const {to, subject, text } = req.body;

    const mailData = {
        from: 'sampathkaali002@gmail.com',
        to: to,
        subject: subject,
        html: `<b>Your ID: ${text} </b>`,
    };

    console.log(mailData);

    // transporter.sendMail(mailData, (error) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     res.status(200).send({ message: "Mail send"});
    // });
});