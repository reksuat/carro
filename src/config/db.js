import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(`${process.env.URI}`);

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

export default connectDB;