import * as express from 'express';
import { AppointmentController } from './AppointmentController';
const router = express.Router();

const controller = new AppointmentController();

router.get('/appointments',
  controller.authenticate,
  controller.listAllAppointments
);

router.post('/appointments.add',
  controller.authenticate,
  controller.addAppointment
);

export const appointmentRouter = router;