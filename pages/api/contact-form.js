const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  if (req.method === "POST") {
    const data = {
      from: email,
      to: "louie.richardson99@gmail.com",
      name,
      text: message,
    };

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "louie.richardson99@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    console.log(transporter);

    transporter.sendMail(data, (err, info) => {
      if (err) {
        return console.log(err);
      }
      return console.log(info);
    });
  }
}
