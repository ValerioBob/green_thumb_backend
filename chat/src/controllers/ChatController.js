const Order = require("../models/Chat");

const CTRL = {};

// CTRL.getOrder = (req, res) => {
//     const { orderId } = req.params;
//     Order.findById(orderId).exec((err, ord) => {
//         if (err) {
//             return res.status(500).json({
//                 ok: false,
//                 err
//             })
//         }
//         res.json({
//             ok: true,
//             ord,
//         });
//     });
// };

// CTRL.addOrder = (req, res) => {
//     const { userId, productId } = req.params;//todo take from cart
//     const newOrder = new Order({
//         user: userId,
//         orderItems: [{ product: productId, qty: 1 }], ///todo take from cart
//         latitude: 0,
//         longitude: 0
//     })
//     newOrder.save().then((order) => {
//         res.json({
//             ok: true,
//             order,
//         });
//     })
// }

// CTRL.updateOrder = (req, res) => {
//     const { orderId } = req.params;
//     Order.findByIdAndUpdate(orderId, { latitude: req.body.latitude, longitude: req.body.longitude })
//         .exec((err, ord) => {
//             if (err) {
//                 return res.status(500).json({
//                     ok: false,
//                     err
//                 })
//             }
//             res.json({
//                 ok: true,
//                 ord,
//             });
//         });
// }

module.exports = CTRL;