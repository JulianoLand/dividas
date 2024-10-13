import mongoose from "mongoose";

let isConnected = false;

const connectMongoDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("MongoDB já conectado");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI || "",{
            dbName: "crud_db"
        });

        isConnected = true;

        console.log("Conectado ao MongoDB.");
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;