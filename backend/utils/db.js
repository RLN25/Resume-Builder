import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const mongo_url = process.env.MONGO_URL;

if (!mongo_url) {
  throw new Error('MONGO_URL environment variable is not defined');
}

export default function connect() {
  mongoose
    .connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // Optional, depending on your version of Mongoose
      useFindAndModify: false, // Optional, depending on your version of Mongoose
    })
    .then(() => {
      console.log('Connected to database');
    })
    .catch((error) => {
      console.error('Error connecting to database:', error);
      process.exit(1); // Exit the process if connection fails
    });
}
