const getAllProductsStatic = async (req,res) => {
    res.status(200).json({msg: "All products are for testing here."})
}

const getAllProducts = async (req,res) => {
    res.status(200).json({msg: "All products are real here."})
}


module.exports = {
    getAllProductsStatic,
    getAllProducts, 
}