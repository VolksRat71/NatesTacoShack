import calculateTacoPrice from "./calculateTacoPrice";

export default function (order, tacos) {
    return order.reduce((total, singleItem) => {
        const taco = tacos.find(({ id }) => id === singleItem.id);
        return total + calculateTacoPrice(taco.price, singleItem.quantity);
    }, 0)
}