const Cart = require('../models/cart')

exports.addItemToCart = (req, res) => {

Cart.findOne({user: req.user._id})
.exec((error, cart ) => {
    if(error) return res.status(400).json({ error })
    if(cart){
        const product = req.body.cartItem.product
        const item = cart.cartItem.find(c => c.product == product)
        if(item){
                 //    res.status(200).json({ message: cart }) 
                Cart.findOneAndUpdate({ "user" : req.user._id, "cartItem.product": product }, {
                    "$set": {
                        "cartItem": {
                            ...req.body.cartItem, 
                            quantity: item.quantity + req.body.cartItem.quantity 
                        }
                    }
                })
                .exec((error, _cart) => {
                    if(error) return res.status(400).json({ error })
                    if(_cart){
                        return res.status(201).json({ cart: _cart})
                    }
                })
                
                } else {
                    //    res.status(200).json({ message: cart }) 
                Cart.findOneAndUpdate({ user: req.user._id}, {
                    "$push": {
                        "cartItem": req.body.cartItem
                        
                    }
                })
                .exec((error, _cart) => {
                    if(error) return res.status(400).json({ error })
                    if(_cart){
                        return res.status(201).json({ cart: _cart})
                    }
                })
        }
        
    } else {
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
})

    
}