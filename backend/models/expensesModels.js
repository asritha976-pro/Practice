const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    // balance:{
    //     type: Number,
    //     required: true,
    // },
    item:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    }
});

// Expense Model

const Expenses = mongoose.model('expenses',expenseSchema)


module.exports = Expenses;