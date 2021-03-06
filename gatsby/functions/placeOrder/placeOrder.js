const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total }) {
    //TODO: Add logo render
    return `<div style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
    text-align: center;
    ">
                <h2>Thank you for ordering!</h2>
                <p>Your order will be ready in 20 minutes!</p>
                <ul style="list-style: none">
                    ${order.map(({ src, name, quantity, price }) => {
        return `<li>
                    <h5>${quantity}ct. ${name} - ${price}</h5>
                        <img src="${src}" alt="${name}" />
                    </li>`
    }).join('')}
                </ul>
                <p>Your total is <strong>${total}</strong> due at pickup!</p>
                <p>Hello! The <a href="https://nathanryan.tech/">web developer</a>  for this site is looking for a good job 😊</p>
            </div>
    `
};

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    secureConnection: process.env.MAIL_SECURE,
    port: process.env.MAIL_PORT,
    tls: {
        ciphers: process.env.MAIL_CIPHER
    },
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);

    if (body.chiliSyrup) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Alexa, Initiate self destruct. ERR 45784' })
        }
    }

    const requiredFields = ['email', 'name', 'order']

    for (field of requiredFields) {
        if (!body[field]) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: `Uh-oh! You are missing the ${field} field!` })
            }
        }
    }

    if (!body.order.length) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'You must have items to create an order!' })
        }
    }

    const info = await transporter.sendMail({
        from: `Nates Taco Shack <${process.env.MAIL_USER}>`,
        to: `${body.name} <${body.email}>`,
        subject: "🌮 Nates Taco Shack Order",
        html: generateOrderEmail({ order: body.order, total: body.total })
    })

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success!' })
    }
}
