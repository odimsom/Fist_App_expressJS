const express = require('express');

const product = [];

// import module from "module";
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.render("add-product", {layout: false, title:"New Product"})
});

router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    product.push({
        name: req.body.ProductName,
        description: req.body.ProductDescription,
        image: req.body.ProductImage,
        price: req.body.ProductPriece
    });
    res.redirect("/");
});


exports.route = router;
exports.products = product; 