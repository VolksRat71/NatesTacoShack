const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'zora90@ethereal.email',
        pass: 'f6EQbB8dWaxtdX7EAR'
    }
});

exports.handler = async (event, context) => {
    const info = await transporter.sendMail({
        from: "Nates Taco Shack <nate@example.com>",
        to: "Orders@email.com",
        subject: "New order!",
        html: `<p>Taco Order!</p>`
    })
    console.log(info);
    return {
        statusCode: 200,
        body: JSON.stringify(info)
    }
}