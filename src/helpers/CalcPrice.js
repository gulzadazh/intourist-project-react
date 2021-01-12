export function calcSubPrice(item){
    return item.count * item.tour.price
}

export function calcTotalPrice(tours){
    let totalPrice = 0;
    tours.forEach(item => {
        totalPrice += item.subPrice
    })
    return totalPrice
}