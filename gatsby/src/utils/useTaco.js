import { useContext } from "react";
import OrderContext from "../components/orderContext";


export default function useTaco({ tacos, inputs }) {
    const [order, setOrder] = useContext(OrderContext);

    function addToOrder(orderedTaco) {
        setOrder([...order, orderedTaco]);
    }

    function removeFromOrder(i) {
        setOrder([
            ...order.slice(0, i),
            ...order.slice(i + 1)
        ])
    }

    localStorage.setItem('order', JSON.stringify(order))

    return {
        order,
        addToOrder,
        removeFromOrder
    }
}