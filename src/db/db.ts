import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/typescriptdatabase';

async function connectToDatabase() {
  try {
    await mongoose.connect(url);
    console.log('Connected to MongoDB');

    // i have set index - username unique (if someone wants to add similar name as stored name then they will get error)
  } catch (error) {
    console.error('Connection error:', error);
  }
}
connectToDatabase();
