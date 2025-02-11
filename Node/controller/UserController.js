import User from "../model/User-detailsModel.js"


export const getUsers= async (req, res)=>{
    console.log('User Data Posted')
    try {
        const {user_id,name,email,address,phone,pin}=req.body
        console.log(req.body);
        
        const usersave= new User({
            user_id,
            name,
            email,
            address,
            phone,
            pin
        })
        const result=await usersave.save()
        // next()
        res.json(result)
    } catch (error) {
        console.log(error);
        
    }
    
};

export const getAllUserDetails = async (req, res) => {
    try {
        const users = await User.find({user_id:req.params.id}); 
        res.json(users); 
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error' });
    }
};