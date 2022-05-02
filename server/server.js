const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const PORT =  process.env.PORT || 3001;
const path = require('path');


app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});

const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 3001,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "ianadamprice@gmail.com"
  },
});

contactEmail.set("oauth2_provision_cb", (user, renew, callback) => {
  let accessToken = userTokens[user];
  if (!accessToken) {
    return callback(new Error("Unknown user"));
  } else {
    return callback(null, accessToken);
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "ianadamprice@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

