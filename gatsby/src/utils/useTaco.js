import { useContext, useState } from "react";
import OrderContext from "../components/orderContext";
import attachNamesAndPrices from "./attachNamesAndPrices";
import calculateOrderTotal from "./calculateOrderTotal";
import formatMoney from "./formatMoney";


export default function useTaco({ tacos, values: { name, email } }) {
    const [order, setOrder] = useContext(OrderContext);
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    function addToOrder(orderedTaco) {
        setOrder([...order, orderedTaco]);
    }

    function removeFromOrder(i) {
        setOrder([
            ...order.slice(0, i),
            ...order.slice(i + 1)
        ])
    }

    async function submitOrder(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const body = {
            order: attachNamesAndPrices(order, tacos),
            total: formatMoney(calculateOrderTotal(order, tacos)),
            name,
            email
        }

        const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const text = JSON.parse(await res.text());

        if (res.status >= 400 && res.status < 600) {
            setError(text.message)
            setLoading(false);
        } else {
            setMessage('Success! Your order will be ready in 20 minutes. Check your email for order details 😊')
            setLoading(false);
            setOrder([]);
        }

    }

    localStorage.setItem('order', JSON.stringify(order))

    return {
        addToOrder,
        removeFromOrder,
        submitOrder,
        order,
        error,
        loading,
        message,
    }
}