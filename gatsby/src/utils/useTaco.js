import { useState } from "react";

export default function useTaco({ tacos, inputs }) {
    const [order, setOrder] = useState([]);

    function addToOrder(orderedTaco) {
        setOrder([...order, orderedTaco]);
    }

    function removeFromOrder(i) {
        setOrder([
            ...order.slice(0, i),
            ...order.slice(i + 1)
        ])
    }

    return {
        order,
        addToOrder,
        removeFromOrder
    }
}