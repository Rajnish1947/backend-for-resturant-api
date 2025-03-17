import ErrorHandler from "../error/error.js";
import { Reservation } from "../model/reservationShema.js";
export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  // Check for missing fields
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill your reservation form properly", 400));
  }

  try {
    // Create reservation with an object
    await Reservation.create({ firstName, lastName, email, phone, date, time });

    return res.status(200).json({
      success: true,
      message: 'Reservation is sent successfully'
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(','), 400));
    }

    // Handle other errors
    return next(new ErrorHandler("An error occurred while processing your request.", 500));
  }
};


// import ErrorHandler from "../error/error.js";
// import { Reservation } from "../model/reservationShema.js";
// export const sendReservation = async (req, res, next) => {
//   const { firstName, lastName, email, phone, date, time } = req.body;
// //   eskamatlab en mese koi bhil valid na ha tab
// // 400 stause code hai jo bad situation ke liye use hota hai
// if(!firstName|| !lastName||!email||!phone||!date||!time)
//     return next(new ErrorHandler("please fill your reservation form properly",400))

// } 
// try {
//     await Reservation.create( firstName, lastName, email, phone, date, time);
//     res.status(200).
//     json({
//       success :true, // Fixed typo here
//       message: 'Reservation is send Successfully'
// })
// }
// catch (error){
// if(error.name==="validationError"){
// const validationErrors=Object.values(error.errs).map(
//   (err)=>err.massage
// );
// return next(new ErrorHandler(validationErrors.join(','),400))
// }
// }

// export const sendReservation = async (req, res, next) => {
//   const { firstName, lastName, email, phone, date, time } = req.body;
// console.log(req.bod)
//   // Check for missing fields
//   if (!firstName || !lastName || !email || !phone || !date || !time) {
//     return next(new ErrorHandler("Please fill your reservation form properly", 400));
//   }

//   try {
//     // Create reservation with an object
//     await Reservation.create({ firstName, lastName, email, phone, date, time });
    
//     res.status(200).json({
//       success: true,
//       message: 'Reservation is sent successfully'
//     });
//   } catch (error) {
//     // Handle validation errors
//     if (error.name === "ValidationError") {
//       const validationErrors = Object.values(error.errors).map(err => err.message);
//       return next(new ErrorHandler(validationErrors.join(','), 400));
//     }

//     // Handle other errors
//     return next(new ErrorHandler("An error occurred while processing your request.", 500));
//   }
// };
