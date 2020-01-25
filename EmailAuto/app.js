
function sendmail(sender,receiver,heading,body){
    var nodemailer = require('nodemailer');
    var sendgridTransport = require('nodemailer-sendgrid-transport');

    var origin = nodemailer.createTransport(
        sendgridTransport({
        auth: {
            api_key:
            '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'
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

