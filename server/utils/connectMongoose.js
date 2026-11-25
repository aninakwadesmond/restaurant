const mongoose = require('mongoose');

async function connectMongoose() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to db');
  } catch (error) {
    console.error(error);
    throw new Error(error?.message || error);
  }
}

module.exports = { connectMongoose };
