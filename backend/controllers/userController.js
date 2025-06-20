const User = require('../models/userModel')

exports.getAllUsers = async(req,res) => {
    try{
        const users = await User.find();
        return res.status(200).send({users:users})
    }catch(error){
        console.error('Error fetching all users',error.message);
        return res.status(500).send({error:'Error fetching all users'});
    }
}

exports.setInitialBalance = async(req,res) => {
    try{
        const userId = req.user.id;
        const {balance} = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {balance},
            {new : true}
        );

        return res.status(200).send({message:"Your Initial balance", balance: updatedUser.balance});
    }catch(error){
        return res.status(400).send({error: "Error initialising balance"});
    }
}