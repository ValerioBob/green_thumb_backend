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

CTRL.getSellersProducts = (req,res) => {
    const { sellerId } = req.params;
    Product.find({'seller': sellerId})
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
}

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
        seller: req.body.seller,
        name: req.body.name,
        latin: req.body.latin,
        description: req.body.description,
        category: req.body.category,
        water: req.body.water,
        oxygen: req.body.oxygen,
        sunlight: req.body.sunlight,
        price: req.body.price,
        picture : req.body.picture
    });

    console.log('%o', newProduct);

    newProduct.save((err, product) => {
        if (err) {
            console.log('%o',err)
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