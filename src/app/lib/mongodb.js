import mongoose from 'mongoose';  // import mongoose

const connectMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI); // connect to MongoDB using the MONGO_URI environment variable
    console.log('MongoDB connected');  // log a message to the console if the connection is successful
    
  } catch (error) {
    console.error('Error connecting to MongoDB :(', error); // log an error message to the console if the connection is unsuccessful
  }
};

export default connectMongoDB;  // export the function to be used in src/app/index.js