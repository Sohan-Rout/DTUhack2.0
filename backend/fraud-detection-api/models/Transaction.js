const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  transaction_id: { type: String, required: true, unique: true },
  payer_id: String,
  payee_id: String,
  amount: Number,
  currency: String,
  timestamp: Date,
  location: String,
  device_id: String,
  is_fraud: Boolean,
  fraud_source: String,
  fraud_reason: String,
  fraud_score: Number
});

module.exports = mongoose.model("Transaction", transactionSchema);