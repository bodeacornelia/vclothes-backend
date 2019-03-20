'use strict'

import * as express from 'express';
const router = express.Router();

import AppointmentAddController from './AppointmentAddController';
const controller = new AppointmentAddController();

router.post('/appointments.add',
  controller.authenticate(),
  controller.addAppointment()
);

export default router;