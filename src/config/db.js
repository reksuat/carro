import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(`mongodb+srv://reksuat:rZcx7lfHX1TBhTrU@cluster0.tou9m.mongodb.net/oficinas`)

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

export default connectDB;