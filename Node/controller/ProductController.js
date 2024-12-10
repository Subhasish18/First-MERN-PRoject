import Product from "../model/ProductModel";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log("Error in getALLProducts controller", error.message);
        
        res.status(500).json({ error: error.message });
    }
};