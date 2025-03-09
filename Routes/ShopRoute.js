const express = require('express');
const AdminRauter = require('../Routes/AdminRoute');

const products = AdminRauter.products;

// impo../Routes/AdminRoute module from "module";
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render("shop", {
        title:"shop Home",
        products: products,
        hasproduct: products.length > 0.
    })
});

module.exports = router;