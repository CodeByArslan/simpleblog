import mongoose from "mongoose";

const connToDB = async () => {
  mongoose.connect(
    "mongodb+srv://arslan:babayaga999@cluster0.a6su1vl.mongodb.net/"
  ).then(()=>console.log('db connected sucessfully')).catch(e=>console.log(e));
};

export default connToDB;
