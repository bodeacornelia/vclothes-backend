import Controller from "../../system/Controller";
import { AppointmentService } from "./AppointmentService";

export default class AppointmentController extends Controller {

  constructor() {
    super();
  }

  async listAllAppointments(req, res) {
    const appointmentList = await AppointmentService.getAllAppointments();
    res.send(appointmentList);
  }

  async addAppointment(req, res) {
    await AppointmentService.createAppointment(req.body);
    const appointmentList = await AppointmentService.getAllAppointments();
    res.send(appointmentList);
  }
}