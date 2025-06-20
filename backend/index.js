const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoConnection = require('./config/mongodb');

const expenseRouter = require('./routes/expenses');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const app = express();

app.use(express.json());

// Routes
app.use('/auth',authRouter);
app.use('/expenses',expenseRouter);
app.use('/users',userRouter);

//Connect to database
mongoConnection();



//Routes
// api to get all expenses

// app.get('/expenses', async(req,res) => {
//     try{
//         const expenses = await Expenses.find();
//         return res.status(200).send({expenses:expenses})
//     }catch(error){
//         console.error(`Error fetching all expense`,error.message)
//         return res.status(500).send({error:`Error fetching all Expenses`})
//     }
// });


//  // api to get expenses by id

//  app.get('/expenses/:id',async(req,res) => {
//     const id = req.params.id;
//     try{
//         const expense = await Expenses.findById(id);
//         if(!expense){
//             return res.status(404).send({error:'Expense not found'})
//         }
//         return res.status(200).send({expense:expense})
//     }catch(error){
//          console.error('Error fetching todo:',error.message)
//         return res.status(500).send({error:'Error fetching expense'})

//     }
//  });
//  // api to create expense

//  app.post('/expenses',async(req,res) => {
//     const {item,amount,category,date} = req.body;
//     try{
//         const newExpense = new Expenses({item, amount, category, date})
//         const savedExpense = await newExpense.save()
//         return res.status(201).send({newExpense:savedExpense})
//     }catch(error){
//         console.log('Error creating expense:',error.message)
//         return res.status(400).send({error:'Error creating expense'})
//     }
//  });

//  // api to update expense by id
//  app.patch('/expenses/:id',async(req,res) => {
//     const id = req.params.id
//     try{
//         const updatedExpenses = await Expenses.findByIdAndUpdate(id,req.body,{new:true})
//         if(!updatedExpenses){
//             return res.status(404).send({error:'Expense not found'})
//         }
//         return res.status(200).send({updatedExpenses:updatedExpenses})
//     }catch(error){
//         console.error('Error updating expense',error.message)
//         return res.status(400).send({error:'Error updating expense '})

//     }
//  })

//  // api to delete expense by id

//  app.delete('/expenses/:id',async(req,res) =>{
//     const id = req.params.id
//     try{
//         const deleteExpense = await Expenses.findByIdAndDelete(id,{new:true})
//         if(!deleteExpense){
//             return res.status(404).send({error:'Expense not found'})
//         }
//         return res.status(200).send({deleteExpense:deleteExpense})
//     }catch(error){
//         console.error('Error deleting Expense',error.message);
//         return res.status(500).send({error:"Error deleting Expense"})
//     }
// })


app.listen(3000,()=>{
    console.log("Server running on port 3000")
})

