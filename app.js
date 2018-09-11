const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()
var cors = require('cors')
const secret = require('dotenv').config()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/api/form', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
		<p>You have a new contact request</p>
		<h3>Contact Details</h3>
		<ul>
		<li>First_name: ${req.body.first_name}</li>
		<li>Last_name: ${req.body.last_name}</li>
		<li>Phone: ${req.body.phone}</li>
		<li>Email: ${req.body.email}</li>
		</ul>
		<h3>Message</h3>
		<p>${req.body.message}</p>
		
		`
		let transporter = nodemailer.createTransport({
			service: 'Hotmail',
			port: 443,
			secure: false, // true for 465, false for other ports
			auth: {
				user: process.env.emailTest, // generated ethereal user
				pass: process.env.emailPassword // generated ethereal password
			}
		})
		let mailOptions = {
			from: '"Souhail" <mr.souid@live.fr>', // sender address
			to: 'souhailsouid4@gmail.com',
			replyTo: 'mr.souid@live.fr', // list of receivers
			subject: 'Contact request ✔', // Subject line
			text: 'Hello world?', // plain text body
			html: htmlEmail // html body
		}
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error)
			}
			console.log('Message sent: %s', info.messageId)
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
			res.render('contact', { msg: 'Your message has been sent' })
		})
	})
})

// tls: {
// 	rejectUnauthorized: false
// }

// const PORT = process.env.PORT || 3002
app.listen(3030, () => console.log('server started ...'))
