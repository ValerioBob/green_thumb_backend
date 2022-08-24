const Chat = require("../models/Chat");
const Order = require("../models/Chat");

const CTRL = {};

CTRL.getMessage = (req, res) => {
    const { userId } = req.params;
    Chat.find({}, {userId: userId, created_at: 1, content: 1,}).exec((err, mess) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            mess,
        });
    });
};

CTRL.sendMessage = (req, res) => {
    const newChat = new Chat({
        userId: req.body.userId,
        content: req.body.content
    });

    newChat.save((err, chat) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err,
            });
        }

        return res.status(201).json({
            ok: true,
            chat,
        });
    });
};

CTRL.updateMessage = (req, res) => {
    const { messageId } = req.params;
    Chat.findByIdAndUpdate(messageId, { content: req.body.content, created_at: req.body.created_at, new: true })
        .exec((err, chat) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                chat,
            });
        });
}

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