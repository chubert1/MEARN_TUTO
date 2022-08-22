// @desc Get products
// @route GET /api/products
// @access Private
const getProducts = async (req, res) => {
    res.status(200).json({message :'Get products'})
}
// @desc Set products
// @route POST /api/products
// @access Private
const setProducts = async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please enter a text field')
    }
    res.status(200).json({message :'Set products'})
}
// @desc Update products
// @route PUT /api/products/:id
// @access Private
const updateProducts = async (req, res) => {
    res.status(200).json({message :`Update product ${req.params.id}`})
}
// @desc Delete products
// @route DELETE /api/products/:id
// @access Private
const deleteProducts = async (req, res) => {
    res.status(200).json({message :`Delete product ${req.params.id}`})
}

module.exports = {getProducts,setProducts,updateProducts,deleteProducts} 