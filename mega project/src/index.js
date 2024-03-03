import dotenv from "dotenv";
import connectDB from "./db/index.js";



dotenv.config({
    path: './env'
});

connectDB()


























/*
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        mongoose.connection.on("error", (error) => {
            console.error("MongoDB Connection failed ho gya :", error);
            process.exit(1);
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
})();
*/