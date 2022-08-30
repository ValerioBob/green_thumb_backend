const Order = require("../models/Order");

const CTRL = {};

CTRL.getOrder = (req, res) => {
    const { orderId } = req.params;
    Order.findById(orderId).exec((err, ord) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            ord,
        });
    });
};

CTRL.getUserOrders = (req, res) => {
    const { userId } = req.params;
    Order.find({'userId':userId}).exec((err, ord) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            ord,
        });
    });
};


CTRL.addOrder = (req, res) => {
    const { userId, fullname,address,city,payment, cart, total } = req.body;

    const newOrder = new Order({
        userId: userId,
        fullname : fullname,
        address : address, 
        city: city,
        payment: payment, 
        cart: cart, //[{ product: productId, qty: 1 }], ///todo take from cart
        total: total,
        latitude: 0,
        longitude: 0
    })
    newOrder.save().then((err, order) => {
    if (err) {
        console.log('%o',err)
        return res.status(500).json({
            ok: false,
            err,
        });
    }
    return res.status(201).json({
        ok: true,
        order,
    })});
}

CTRL.updateOrder = (req, res) => {
    const { orderId } = req.params;
    Order.findByIdAndUpdate(orderId, { latitude: req.body.latitude, longitude: req.body.longitude })
        .exec((err, ord) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                ord,
            });
        });
}

module.exports = CTRL;