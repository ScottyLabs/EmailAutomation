
function sendmail(sender,receiver,heading,body){
    var nodemailer = require('nodemailer');
    var sendgridTransport = require('nodemailer-sendgrid-transport');

    var origin = nodemailer.createTransport(
        sendgridTransport({
        auth: {
            api_key: // put api key here
            // can be created at this link https://sendgrid.com/docs/API_Reference/api_getting_started.html
        }
        })
    );

    origin.sendMail({
        to: receiver,
        from: sender,
        subject: heading,
        html: body
      }).then().catch(err => { console.log(err); });

}

sender = ""
reciever = ""
subject = ""
body = ""
sendmail(sender, reciever, subject ,body)

