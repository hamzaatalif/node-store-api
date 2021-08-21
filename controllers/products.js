const Product = require("../models/product");


const getAllProductsStatic = async (req,res) => {    
    const products = await Product.find({}).sort("name") 
    res.status(200).json({products})
}

const getAllProducts = async (req,res) => {
    const {featured, company, name} = req.query;
    const queryObject = {}
    if (featured){
        queryObject.featured = featured === 'true' ? true : false;
    }    
    if (company){
        queryObject.company = company
    }
    if (name){
        queryObject.name = { "$regex": "/name/", "$options": "i"}
    } 
    const products = await Product.find(req.query);
    res.status(200).json({products})
}


module.exports = {
    getAllProductsStatic,
    getAllProducts, 
}