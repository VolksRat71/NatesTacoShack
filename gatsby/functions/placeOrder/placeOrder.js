const nodemailer = require('nodemailer');


function generateOrderEmail({ order, total }) {
    return `<div>
                <h2>Your recent order for ${total}</h2>
                <p>Your order will be ready in 20 minutes!</p>
                <ul>
                    ${order.map(({ src, name, quantity, price }) => {
        `<li>
                        <img src="${src}" alt="${name}" />
                        ${quantity} ${name} - ${price}
                    </li>`
    })}
                </ul>
                <p>Your total is $${total} due at pickup!</p>
            </div>
    `
}

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'francisco.roob73@ethereal.email',
        pass: 'jsP3pwGMzZeTw2uj1W'
    }
});

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);
    const requiredFields = ['email', 'name', 'order']

    for (field of requiredFields) {
        console.log(`Checking that ${field} is good`);
        if (!body[field]) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: `Uh-oh! You are missing the ${field} field!` })
            }
        }
    }

    const info = await transporter.sendMail({
        from: "Nates Taco Shack <nate@example.com>",
        to: `${body.name} <${body.email}>`,
        subject: "New order!",
        html: generateOrderEmail({ order: body.order, total: body.total })
    })
    return {
        statusCode: 200,
        body: JSON.stringify(info)
    }
}
