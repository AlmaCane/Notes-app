import mongoose from "mongoose";

const conectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://alma:1234@uno.bzdvdfr.mongodb.net/");
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default conectDB;
