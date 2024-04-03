const mongoose = require("mongoose");

const dbConnect = async (url: any) => {
  await mongoose
    .connect(url)
    .then(console.log("Connected"))
    .catch((err: any) => console.log(err.message));
};

export default dbConnect;