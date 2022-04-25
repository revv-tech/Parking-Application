const nodemailer = require('nodemailer')
const {CUSTOMER_SERVICE_EMAIL,CUSTOMER_SERVICE_PASSWORD} = process.env
const transporter = nodemailer.createTransport(
    {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: CUSTOMER_SERVICE_EMAIL,
            pass: CUSTOMER_SERVICE_PASSWORD
        }
    }
)

const welcomeMessage = "<br>Welcome to the Brainery family, we are happy you decided to join in this adventure \
                        of learning. Your account is all set up and ready to go, we hope to see you around often.<br><br>Sincerely,<br>"

const followerMessage1 = "<br>Looks like you are getting popular, a few moments ago "

const followerMessage2 = " started following you, check their profile and follow back!<br><br>Sincerely,<br>"

const setEvName = async (evaluationName,courseName,startDate,endDate) => {
    return `<br>A new evaluation: “${evaluationName}”, have been published on the course ${courseName}. It opens at ${startDate} and closes at ${endDate}<br><br>Sincerely,<br>`
}

module.exports = {
    sendEmail: async (receiverEmail,receiverUsername) => { //userOptions: from, to, subject, text, (html?)
    transporter.sendMail({
        from: `"Brainery" <${CUSTOMER_SERVICE_EMAIL}>`,
        to: receiverEmail, 
        subject: `Hi ${receiverUsername}, welcome to the Brainery family!`, 
        text: `Hi ${receiverUsername},`+ "welcome to the Brainery family, we are happy you decided to join in this adventure of learning. Your account is all set up and ready to go, we hope to see you around often.\n\nSincerely,\n\n",
        html: `<p style="color:black"><b>Hi ${receiverUsername},</b>${welcomeMessage}<br /><img src="cid:uniq-mailtrap.jpg" alt="mailtrap" /><br><br>Brainery Customer Service Team<br>San José, Costa Rica</p>`,
        attachments: [
            {
              filename: 'braineryLogo.jpg',
              path: 'https://res.cloudinary.com/diqlcshe2/image/upload/v1633009426/braineryLogo.jpg',
              cid: 'uniq-mailtrap.jpg'
            }
          ] 
        }, function(err,data){
            if (err) console.log(err);
        });
    return true    
    },
    sendSignUpEmail: async (receiverEmail,receiverUsername) => {
        transporter.sendMail({
        from: `"Brainery" <${CUSTOMER_SERVICE_EMAIL}>`,
        to: receiverEmail, 
        subject: `Hi ${receiverUsername}, welcome to the Brainery family!`, 
        text: `Hi ${receiverUsername},`+ "welcome to the Brainery family, we are happy you decided to join in this adventure of learning. Your account is all set up and ready to go, we hope to see you around often.\n\nSincerely,\n\n",
        html: `<p style="color:black"><b>Hi ${receiverUsername},</b>${welcomeMessage}<br /><img src="cid:uniq-mailtrap.jpg" alt="mailtrap" /><br><br>Brainery Customer Service Team<br>San José, Costa Rica</p>`,
        attachments: [
            {
              filename: 'braineryLogo.jpg',
              path: 'https://res.cloudinary.com/diqlcshe2/image/upload/v1633009426/braineryLogo.jpg',
              cid: 'uniq-mailtrap.jpg'
            }
          ]
        },function(err,data){
            if (err) console.log(err);
        });
        return true
    },
    sendNewFollowerEmail: async (receiverEmail, receiverUsername,followerUsername) => {
        transporter.sendMail({
            from: `"Brainery" <${CUSTOMER_SERVICE_EMAIL}>`,
            to: receiverEmail, 
            subject: `You got a new follower! - Brainery App`, 
            text: `<p style="color:black"><b>Hey ${receiverUsername},</b>${followerMessage1+followerUsername+followerMessage2}<br />`,
            html: `<p style="color:black"><b>Hey ${receiverUsername},</b>${followerMessage1+followerUsername+followerMessage2}<br /><img src="cid:uniq-mailtrap.jpg" alt="mailtrap" /><br><br>Brainery Customer Service Team<br>San José, Costa Rica</p>`,
            attachments: [
                {
                  filename: 'braineryLogo.jpg',
                  path: 'https://res.cloudinary.com/diqlcshe2/image/upload/v1633009426/braineryLogo.jpg',
                  cid: 'uniq-mailtrap.jpg'
                }
              ]
        })
    },
    sendNewEvaluationEmail: async (receiverEmails, evaluationName,courseName,startDate,endDate) => {
        transporter.sendMail({
            from: `"Brainery" <${CUSTOMER_SERVICE_EMAIL}>`,
            to: receiverEmails, 
            subject: `Check the new evaluation on ${courseName} course - Brainery App`, 
            text: `<p style="color:black"><b>Hi,</b>${await setEvName(evaluationName,courseName,startDate,endDate)}<br />`,
            html: `<p style="color:black"><b>Hi,</b>${await setEvName(evaluationName,courseName,startDate,endDate)}<br /><img src="cid:uniq-mailtrap.jpg" alt="mailtrap" /><br><br>Brainery Customer Service Team<br>San José, Costa Rica</p>`,
            attachments: [
                {
                  filename: 'braineryLogo.jpg',
                  path: 'https://res.cloudinary.com/diqlcshe2/image/upload/v1633009426/braineryLogo.jpg',
                  cid: 'uniq-mailtrap.jpg'
                }
              ]
        })
    }
}