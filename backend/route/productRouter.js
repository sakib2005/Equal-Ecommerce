import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
const router = express.Router();

// @des fetch all product
// @route GET api/product
// @access Public
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);
// @des fetch single product
// @route GET api/product/:id
// @access Public

router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("product not found");
    }
  })
);

export default router;
