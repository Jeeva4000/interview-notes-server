import mongoose from "mongoose";

export function dbConnection() {
    const params = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try {
        mongoose.connect("mongodb+srv://Jeeva:Jeeva12345@cluster0.7wb6jvt.mongodb.net/interview?retryWrites=true&w=majority", params)
        console.log("Database connected Sucessfully")
    } catch (error) {
        console.log("Error connecting DB----", error)
    }
}
