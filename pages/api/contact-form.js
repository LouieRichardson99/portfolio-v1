const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  if (req.method === "POST") {
    const data = {
      from: `<${email}>`,
      to: "louie.richardson99@gmail.com",
      subject: `Message from ${name}`,
      text: `${message}\n\n(Sent from louierichardson.com)`,
    };

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      service: "gmail",
      auth: {
        user: "louie.richardson99@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    transporter.sendMail(data, (err, info) => {
      if (err) {
        return res
          .status(400)
          .json({ message: "There seems to have been an error." });
      }
      return res.status(200).json({ message: "Message sent!" });
    });
  }
}
