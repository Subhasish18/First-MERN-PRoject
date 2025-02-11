import Cart from '../model/CartModel.js';


export const getAllCarts = async (req, res) => {
    console.log('Cart Data Posted')
    const cartrsave= new Cart({
        product_id:req.body.product_id,
        user_id:req.body.user_id,
        quantity:req.body.quantity,
    })
    await cartrsave.save()
    // next()
    res.json(cartrsave)
};

export const getAllCarDetails = async (req, res) => {
    try {
        const carts = await Cart.find({user_id:req.params.id}); 
        res.json(carts); 
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error' });
    }
};