'use strict'

import Controller from '../../../system/Controller';
import AppointmentService from '../service/AppointmentService';

export default class AppointmentListController extends Controller {

  constructor() {
    super();
  }

  listAllAppointments() {
    return async function (req, res) {
      const appointmentList = await AppointmentService.getAllAppointments();
      res.send(appointmentList);
    }
  }
}