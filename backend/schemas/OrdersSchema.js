const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    // percent: String,
    // isDown: Boolean,
})

module.exports = {OrdersSchema};