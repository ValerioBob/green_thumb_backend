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
            found = false;
            cart[0].cartItems.forEach(p => {
                if (p.product == productId) {//product exist in cart, so add qty +1
                    found = true;

                    Cart.updateOne(
                        { 'cartId': cartId },
                        { $set: { "cartItems.$[x].qty": p.qty + 1 } },
                        { arrayFilters: [{ "x.product": productId }] })

                        .then(result => {
                            res.json({
                                ok: true,
                                result
                            });
                        })
                }
            })

            if (!found) {
                Cart.updateOne({ 'cartId': cartId }, { $push: { cartItems: [{ product: productId, qty: 1 }] } })
                    .then(result => {

                        res.json({
                            ok: true,
                            result
                        })
                    })


            }
        }
        else if (cart.length == 0) {
            const newCart = new Cart({
                cartId: cartId,
                cartItems: [{ product: productId, qty: 1 }]
            })

            newCart.save()

            res.json({
                ok: true,
                newCart,
            });
        }
    }
    )
}


// CTRL.removeProduct = (req, res) => {

//     const { cartId, productId } = req.params;

//     Cart.find({ 'cartId': cartId }).exec((err, cart) => {
//         if (err) {
//             return res.status(500).json({
//                 ok: false,
//                 err
//             })
//         }
//         else if (cart.length > 0) {// cart exists
//             found = false;
//             cart[0].cartItems.forEach(p => {
//                 if (p.product == productId) {//product exist in cart, so add qty +1
//                     found = true;

//                     Cart.updateOne(
//                         { 'cartId': cartId },
//                         { $set: { "cartItems.$[x].qty": p.qty + 1 } },
//                         { arrayFilters: [{ "x.product": productId }] })

//                         .then(result => {
//                             res.json({
//                                 ok: true,
//                                 result
//                             });
//                         })
//                 }
//             })

//             if (!found) {
//                 Cart.updateOne({ 'cartId': cartId }, { $push: { cartItems: [{ product: productId, qty: 1 }] } })
//                     .then(result => {

//                         res.json({
//                             ok: true,
//                             result
//                         })
//                     })


//             }
//         }
//         else if (cart.length == 0) {
//             const newCart = new Cart({
//                 cartId: cartId,
//                 cartItems: [{ product: productId, qty: 1 }]
//             })

//             newCart.save()

//             res.json({
//                 ok: true,
//                 newCart,
//             });
//         }
//     }
//     )
// }





// CTRL.deleteCart = (req, res) => {
//     const { cartId } = req.params

//     Category.findByIdAndRemove(categoryId, (err, category) => {
//         if (err) {
//             return res.status(500).json({
//                 ok: false,
//                 err,
//             });
//         }

//         return res.status(201).json({
//             ok: true,
//             category,
//         });
//     });
// };

module.exports = CTRL;