import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://shivamyadav2113128:9o67AjZt72AKXHun@intern.iq67n.mongodb.net/?retryWrites=true&w=majority&appName=intern/restaurant-booking');
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;