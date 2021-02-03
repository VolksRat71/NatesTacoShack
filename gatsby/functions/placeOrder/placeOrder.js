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
                <p>Hello! This <a href="https://nathanryan.tech/">web developer</a> is looking for a good job 😊</p>
            </div>
    `
};

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'josephine38@ethereal.email',
        pass: 'QmHXF3jjdnymXqrE8c'
    }
});

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);
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
        from: "Nates Taco Shack <nate@example.com>",
        to: `${body.name} <${body.email}>`,
        subject: "🌮 Nates Taco Shack Order",
        html: generateOrderEmail({ order: body.order, total: body.total })
    })
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success!' })
    }
}
