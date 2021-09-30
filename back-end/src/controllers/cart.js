const Cart = require('../models/cart')

exports.addItemToCart = (req, res) => {
    // res.json({ message: 'cart' })
    const cart = new Cart({
        user: req.user._id,
        cartItem: req.body.cartItem
    })

    cart.save((error, cart) => {
        if(error) return res.status(400).json({ error })
        if(cart) {
            return res.status(201).json({ cart })
        }
    })
}