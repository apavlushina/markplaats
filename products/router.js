const { Router } = require("express");
const Product = require("./model");

const router = new Router();

router.get("/products", (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(err => next(err));
});

router.post("/products", (req, res, next) => {
  Product.create(req.body)
    .then(console.log(req.body))
    .then(product => res.json(product))
    .catch(err => next(err));
});

router.get("/products/:productId", (req, res, next) => {
  Product.findByPk(req.params.productId)
    .then(product => {
      if (!product) {
        res.status(404).end();
      } else {
        res.json(product);
      }
    })
    .catch(err => next(err));
});

router.put("/products/:productId", (req, res, next) => {
  Product.findByPk(req.params.productId)
    .then(product => {
      if (product) {
        product.update(req.body).then(product => res.json(product));
      } else {
        res.status(404).end();
      }
    })
    .catch(err => next(err));
});

module.exports = router;
