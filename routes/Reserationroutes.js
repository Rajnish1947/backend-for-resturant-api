import express from 'express';
import { sendReservation } from '../controller/reservation.js';
// Create a Router instance
const router=express.Router();
router.post('/send',sendReservation);
export default router;