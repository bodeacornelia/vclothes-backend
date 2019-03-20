'use strict'

import * as express from 'express';
const router = express.Router();

import AppointmentListController from './AppointmentListController';
const controller = new AppointmentListController();

router.get('/appointments',
  controller.authenticate(),
  controller.listAllAppointments()
);

export default router;