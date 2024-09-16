import mongoose from "mongoose";

let connected = false;

const connectDb = async () => {
  mongoose.set("strictQuery", true);

  //if the database allready connected, don't connect again ;
  if (connected) {
    console.log("mongoDB is connected");
    return;
  }

  //connect to MongoDB:
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
