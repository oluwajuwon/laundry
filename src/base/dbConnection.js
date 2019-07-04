import mongoose from 'mongoose';
import dotenv from 'dotenv';

const dbConnection = () => {
  dotenv.config();

  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  mongoose.connection.on('connected', () => { console.log('MongoDB successful connected'); });
  mongoose.connection.on('error', (error) => { console.error(`MongoDB connection error: ${error}`); });
};

export default dbConnection;
