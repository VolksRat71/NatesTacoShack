import calculateTacoPrice from "./calculateTacoPrice"
import formatMoney from "./formatMoney"

export default function (order, tacos) {
    return order.map(item => {
        const {
            name,
            price,
            image: { asset: { fluid: { src } } }
        } = tacos.find(({ id }) => id === item.id);
        return {
            ...item,
            price: formatMoney(calculateTacoPrice(price, item.quantity)),
            name,
            src
        }
    })
}