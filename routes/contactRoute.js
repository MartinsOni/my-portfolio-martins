import express from "express"
import nodemailer from "nodemailer"

const router = express.Router()

router.get ("/version", (req, res) => {
  return res.status(200).json({version:"1.0.1"})
})

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "martinsadedejioni@gmail.com",
      pass: process.env.PASSWORD,
    },
  });
  let mailOptions = {
    from: data.email,
    to: "martinsadedejioni@gmail.com",
    subject: `message from ${data.name}`,
    html: `
            <h3>Information<h3/>
            <p>Name: ${data.name}<p/>
            <p>Email: ${data.email}<p/>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please Fill All The Fields!" });
      res.status(200).json({ msg: "Thank You For Contacting Martins." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});

export default router