import * as express from 'express';
import { AppointmentController } from './AppointmentController';
const router = express.Router();

const controller = new AppointmentController();

router.get('/appointments',
  controller.authenticate,
  controller.listAllAppointments,
  controller.reply
);

router.post('/appointments.add',
  controller.authenticate,
  controller.addAppointment,
  controller.reply
);

export const appointmentRouter = router;