import mongoose from "mongoose";

const connectDB = async() => mongoose
.connect(`${process.env.URI}`)
.then(() => console.log("Conectado ao MongoDB"))
.catch((error) => console.error("Erro ao conectar ao MongoDB", error))

connectDB()
//     try {
//         await mongoose.connect(`${process.env.URI}`)

//     } catch (error) {
//         console.error('Erro ao conectar ao MongoDB', error);

//     }
// };

export default mongoose;