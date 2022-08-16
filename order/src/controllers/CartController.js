const e = require("express");
const Cart = require("../models/Cart");

const CTRL = {};

CTRL.getCart = (req, res) => {
    const { cartId } = req.params;
    Cart.findById(cartId).exec((err, cart) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            cart,
        });
    });
};

CTRL.addProduct = (req, res) => {

    const { cartId, productId } = req.params;

    Cart.find({ 'cartId': cartId }).exec((err, cart) => {

        if (err) {

            return res.status(500).json({
                ok: false,
                err
            })
        }
        else if (cart.length > 0) {// cart exists
            // console.log(cart)
            found = false;
            console.log('%o',)


            cart.cartItems.forEach(p => {
                if (p.product == productId) {//product exist in cart, so add qty +1
                    found = true;
                    Cart.updateOne({ 'cartId': cartId }, { cartItems: [{ product: productId, qty: p.qty + 1 }] })
                }
            });
            if (!found)
                Cart.updateOne({ 'cartId': cartId }, { cartItems: [{ product: productId, qty: 1 }] })
            res.json({
                ok: true
            });

        }
        else if (cart.length == 0) {

            console.log("cart == null")
            const newCart = new Cart({
                cartId: cartId,
                cartItems: [{ product: productId, qty: 1 }]
            })
            console.log('%o', newCart)
            newCart.save();

            res.json({
                ok: true,
                newCart,
            });

        }

    });
};

CTRL.createCategory = (req, res) => {
    const newCategory = new Category({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    })


    newCategory.save((err, category) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err,
            });
        }

        return res.status(201).json({
            ok: true,
            category,
        });
    });
};

CTRL.updateCart = (req, res) => {
    const { cartId } = req.params;

    Cart.findByIdAndUpdate(
        cartId,
        req.body,
        { new: true },
        (err, category) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err,
                });
            }

            return res.status(201).json({
                ok: true,
                category,
            });
        }
    );
};

CTRL.deleteCategory = (req, res) => {
    const { categoryId } = req.params;

    Category.findByIdAndRemove(categoryId, (err, category) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err,
            });
        }

        return res.status(201).json({
            ok: true,
            category,
        });
    });
};

module.exports = CTRL;