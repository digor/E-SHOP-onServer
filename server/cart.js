let add = (cart, req) => {
    cart.contents.push (req.body);
    return JSON.stringify (cart, null, 4)
}

let change = (cart, req) => {
    let find = cart.cntents.find (el => el.id_product === +req.params.id);
    find.quantity++;
    return JSON.stringify ('cart', null, 4)
}

module.exports = {
    add, change
}