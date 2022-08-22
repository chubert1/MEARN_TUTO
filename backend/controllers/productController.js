const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel');
const User = require('../models/userModel');
// @desc Get products
// @route GET /api/products
// @access Private
const getProducts = asyncHandler(async (req, res) => {

    const products = await Product.find({user: req.user.id})
    res.status(200).json(products)
})
// @desc Set products
// @route POST /api/products
// @access Private
const setProducts = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please enter a text field')
    }
    const product = await Product.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(product)
})
// @desc Update products
// @route PUT /api/products/:id
// @access Private
const updateProducts = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        res.status(400);
        throw new Error('Product not found')
    }
    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the product user
    if (product.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updateProduct)
})
// @desc Delete products
// @route DELETE /api/products/:id
// @access Private
const deleteProducts = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        res.status(400);
        throw new Error('Product not found')
    }
    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the product user
    if (product.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
        await Product.deleteOne()
    res.status(200).json({id: req.params.id})
})

module.exports = {getProducts,setProducts,updateProducts,deleteProducts} 