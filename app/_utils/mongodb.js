import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        console.log(
            `MongoDB URL: mongodb+srv://ashishprasad:XocHjgNfi5103f2X@cluster0.lwkqj.mongodb.net/`
        );
        await mongoose.connect(
            "mongodb+srv://ashishprasad:XocHjgNfi5103f2X@cluster0.lwkqj.mongodb.net/",
            {
                dbName: "test",
            }
        );

        isConnected = true;
        console.log("MongoDB is connected");
    } catch (err) {
        isConnected = false; // Reset isConnected flag on connection failure
        console.error("Error connecting to MongoDB:", err);
        // Depending on your application's requirements, you might want to throw an error here or retry the connection.
    }
};
