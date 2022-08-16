const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    cartId: {
        type: Schema.Types.ObjectId,
        // ref: "Client",
        unique: true,
    },
    cartItems: [
        {
            product: {
                type: Schema.Types.ObjectId,
                // ref: "Product",
            },
            qty: Number,
        },
    ],

    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Cart", CartSchema);