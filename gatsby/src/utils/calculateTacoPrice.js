const quantities = {
    '1': 1,
    // Decoy
    '2': .95,
    '3': .75
}

export default function calculateTacoPrice(cents, quantity) {
    return Math.round(cents * quantities[quantity]) * parseInt(quantity)
}