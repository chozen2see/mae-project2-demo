const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const fruitSchema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean,
  },
  { timestamps: true } // add a timestamp to each document
);

// create Model from Schema (singular)
const Fruit = mongoose.model('Fruit', fruitSchema);

// export the Model
module.exports = Fruit;
