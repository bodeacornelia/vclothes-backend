import Controller from "../../system/Controller";
import { AppointmentService } from "./AppointmentService";
import { isEmpty } from 'lodash';
import { XErrorMissingFields } from '../../system/xerrors/XErrorMissingFields';

export class AppointmentController extends Controller {
  constructor() {
    super();
  }

  async listAllAppointments(req, res) {
    const appointmentList = await AppointmentService.getAllAppointments();
    return res.json(appointmentList);
  }

  async addAppointment(req, res, next) {
    if (isEmpty(req.body)) {
      const error = new XErrorMissingFields('Appointment details required');
      return next(error);
    }

    const userId = req.user.id;
    await AppointmentService.createAppointment(userId, req.body).catch(next);
    const appointmentList = await AppointmentService.getAllAppointments();
    return res.json(appointmentList);
  }
}