// cors backend se coonect karta hai 
//.env variable eneirnment provide karta hai
//validater validation check karta hai 

import app from "./app.js";


app.listen(process.env.PORT, () => {
    console.log(`Server is runing on http://localhost:${process.env.PORT}`);
});
