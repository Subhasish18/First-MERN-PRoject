import Product from "../model/ProductModel.js";


export const getAllProducts = async (req, res) => {
    console.log('Data Posted')
    
    const productsave= new Product({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:req.body.image
    })
    await productsave.save()
    // next()
    res.json(productsave)
};

export const getAllProductDetails = async (req, res) => {
    try {
        const products = await Product.find(); 
        res.json(products); 
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error' });
    }
};