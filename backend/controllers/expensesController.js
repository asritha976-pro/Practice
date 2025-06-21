const Expenses = require('../models/expensesModels');
const User = require('../models/userModel')
exports.getAllExpenses = async(req,res) => {
    const userId = req.user.id;
    try{
        const expenses = await Expenses.find({user:userId}).sort({date:-1});
        return res.status(200).send({expenses:expenses})
    }catch(error){
        console.error(`Error fetching all expense`,error.message)
        return res.status(500).send({error:`Error fetching all Expenses`})
    }
}

exports.getExpenseById = async(req,res) => {
    const id = req.params.id;
    try{
        const expense = await Expenses.findById(id);
        if(!expense){
            return res.status(404).send({error:'Expense not found'})
        }
        return res.status(200).send({expense:expense})
    }catch(error){
         console.error('Error fetching todo:',error.message)
        return res.status(500).send({error:'Error fetching expense'})

    }
}

exports.createExpense = async(req,res) => {
     const {item,amount,category,date,payment} = req.body;
     const userId = req.user.id;
     console.log("Creating expense for user:", userId); //  debug
     
     const user = await User.findById(userId);
     if(!user){
        return res.status(404).send({error:"User not found"});
     }

     if(user.balnce < amount){
        return res.status(400).send({error:"Not Sufficient balance"});
     }

     user.balance -= amount;
     await user.save();

    try{
        const newExpense = new Expenses({item, amount, category, payment, date,user: userId});
        const savedExpense = await newExpense.save()
        return res.status(201).send({newExpense:savedExpense , message : "Expense added and balance updated",expense : savedExpense, remainingBalance: user.balance})
    }catch(error){
        console.log('Error creating expense:',error.message)
        return res.status(400).send({error:'Error creating expense'})
    }
}

exports.updateExpense = async(req,res) => {
    const id = req.params.id
    try{
        const updatedExpenses = await Expenses.findByIdAndUpdate(id,req.body,{new:true})
        if(!updatedExpenses){
            return res.status(404).send({error:'Expense not found'})
        }
        return res.status(200).send({updatedExpenses:updatedExpenses})
    }catch(error){
        console.error('Error updating expense',error.message)
        return res.status(400).send({error:'Error updating expense '})

    }
}

exports.deleteExpense = async(req,res) => {
     const id = req.params.id
    try{
        const deleteExpense = await Expenses.findByIdAndDelete(id,{new:true})
        if(!deleteExpense){
            return res.status(404).send({error:'Expense not found'})
        }
        return res.status(200).send({deleteExpense:deleteExpense})
    }catch(error){
        console.error('Error deleting Expense',error.message);
        return res.status(500).send({error:"Error deleting Expense"})
    }
}