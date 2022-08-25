const Product = require("../models/Product");

const CTRL = {};

CTRL.getProducts = (req, res) => {
    Product.find({})
        .populate("category")
        .exec((err, products) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                products,
            });
        });
};

CTRL.getProduct = (req, res) => {
    const { productId } = req.params;
    Product.findById(productId)
        .populate("category")
        .exec((err, product) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                product,
            });
        });
};

CTRL.createProduct = (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        latin: req.body.latin,
        description: req.body.description,
        plant: req.body.plant,
        category: req.body.category,
        water: req.body.water,
        oxigen: req.body.oxigen,
        sunlight: req.body.sunlight,
        price: req.body.price
    });

    newProduct.save((err, product) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err,
            });
        }

        return res.status(201).json({
            ok: true,
            product,
        });
    });
};

CTRL.updateProduct = (req, res) => {
    const { productId } = req.params;

    Product.findByIdAndUpdate(
        productId,
        req.body,
        { new: true },
        (err, product) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err,
                });
            }

            return res.status(201).json({
                ok: true,
                product,
            });
        }
    );
};

CTRL.deleteProduct = (req, res) => {
    const { productId } = req.params;
    Product.findByIdAndRemove(productId, (err, product) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err,
            });
        }

        return res.status(201).json({
            ok: true,
            product,
        });
    });
};

module.exports = CTRL;