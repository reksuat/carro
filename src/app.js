import express from "express";
import connectDB from "./config/db.js";
import maintenanceRouter from "./routes/maintenance.js";
import vehicleRouter from "./routes/vehicle.js";
import workshopRouter from "./routes/workshop.js";


connectDB();

const app = express()

app.use(express.json())

app.use("/workshop", workshopRouter);
app.use("/vehicle", vehicleRouter);
app.use("/maintenance", maintenanceRouter);

const porta = 5000;
app.listen(porta, () => {
    console.log("Server is running.. ");
})