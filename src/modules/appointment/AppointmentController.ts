import Controller from "../../system/Controller";
import { AppointmentService } from "./AppointmentService";

export class AppointmentController extends Controller {
  constructor() {
    super();
  }

  async listAllAppointments(req, res, next) {
    const appointmentList = await AppointmentService.getAllAppointments();
    res.response = appointmentList;
    next();
  }

  async addAppointment(req, res, next) {
    await AppointmentService.createAppointment(req.body).catch(next);
    const appointmentList = await AppointmentService.getAllAppointments();
    res.response = appointmentList;
    next();
  }
}