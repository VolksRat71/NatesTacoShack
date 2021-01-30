import React, { useState, createContext } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
    const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')) || []);
    return (
        <OrderContext.Provider value={[order, setOrder]}>
            {children}
        </OrderContext.Provider>
    )
};

export default OrderContext;