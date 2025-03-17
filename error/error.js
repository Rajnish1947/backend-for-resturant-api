class ErrorHandler extends Error {
    constructor(message,statusCode) {
        super(message); // Call the parent class constructor with the message
       
        this.statusCode=statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;
  
    return res.status(err.statusCode).json({
      success: false,
      message: err.message
    });
  };
  
 export default ErrorHandler;






// here built-in Error class allows you to maintain consistency in how errors are thrown and handled.
//ye midle ke liye file bna rahe jo error ko handle karega 

// class ErrorHandler extends Error {
//     constructor(message,statusCode) {
//         super(message); // Call the parent class constructor with the message
       
//         this.statusCode=statusCode;
//     }
// }
//  export const errorMiddleware=(err,req,res,next)=>{
//     err.message=err.message || "Internal Server Error";
//     // 500 bad situation ke lite status code room me use hota hai
//     err.statusCode=err.statusCode || 500;
// return res.status( err.statusCode).json({
//     // Keys: success and message are keys (or property names) in the object.
// //Values: The values associated with these keys (false and an error message string) provide information about the error response.
//     // here success and message is keyword 
//     success: false, // Fixed typo here
//     message: err.message // Fixed typo here 

// })

// }
