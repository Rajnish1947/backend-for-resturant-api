import mongoose from "mongoose";

 const dbConnection = async () => {
    try {
        const dbName = process.env.DB_NAME;
        await mongoose.connect(process.env.MONGO_URI, {
            //  dbName: "project",
          //or ese bhi use kar skate hai 
           dbName : dbName
 

            
        });
        console.log('Connected to database successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

export default dbConnection;