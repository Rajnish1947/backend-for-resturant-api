import mongoose  from "mongoose";
import validator from "validator";
const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, 'First name must contain at least 3 characters'],
        maxlength: [30, 'First name must contain at most 30 characters']
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, 'Last name must contain at least 3 characters'],
        maxlength: [30, 'Last name must contain at most 30 characters']
    },
    email: {
        type: String,
        required: true, // Fixed from 'require' to 'required'
        validate: [validator.isEmail, 'Provide a valid email'] // Fixed from 'validator' to 'validate'
    },
    phone: {
        type: String,
        required: true,
        minlength: [10, 'Phone must be 10 digits long'],
        maxlength: [10, 'Phone must be 10 digits long']
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

export const Reservation=mongoose.model("Reservation",reservationSchema)





// import mongoose  from "mongoose";
// ese email ke validation ke liye use karenge
// import validator from "validator";
// const reservationShema=new mongoose.Schema({
//     FirstName:{
//         type:String,
//         require:true,
//         //yahi sms show kareega jab ham naam ko given size ke roop create nahi karenge yaha pe validater use ho raha hai
//         minlength:[3,'the first name must be contain at least 3 characters'],
//         maxlength:[30,'the first name must be contain at least 3 characters']
//     }
// })
// const reservationSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         minlength: [3, 'First name must contain at least 3 characters'],
//         maxlength: [30, 'First name must contain at most 30 characters']
//     },
//     lastName: {
//         type: String,
//         required: true,
//         minlength: [3, 'Last name must contain at least 3 characters'],
//         maxlength: [30, 'Last name must contain at most 30 characters']
//     },
//     email: {
//         type: String,
//         required: true, // Fixed from 'require' to 'required'
//         validate: [validator.isEmail, 'Provide a valid email'] // Fixed from 'validator' to 'validate'
//     },
//     phone: {
//         type: String,
//         required: true,
//         minlength: [10, 'Phone must be 10 digits long'],
//         maxlength: [10, 'Phone must be 10 digits long']
//     },
//     date: {
//         type: String,
//         required: true
//     },
//     time: {
//         type: String,
//         required: true
//     }
// });

// module ko ak alag tarika se export karte hai export name=(samename,and jis shema pe kam kar rahe uska naam)
// export const Reservation=mongoose.model("Reservation",reservationSchema)
// local host se post kar ke ckeck kare data http://localhost:5000/api/v1/reservation/send
//{ 
//     "firstName": "rajnish kumar",
//     "lastName": "raj", // Removed extra space
//     "email": "kumar@123gmail.com",
//     "phone": "1234567890",
//     "date": "123",
//     "time": "12345"
// }
