import Controller from '../../../system/Controller';
import AppointmentService from '../service/AppointmentService';

export default class AppointmentAddController extends Controller {

  constructor() {
    super();
  }

  addAppointment() {
    return async function (req, res) {
      await AppointmentService.createAppointment(req.body);
      const appointmentList = await AppointmentService.getAllAppointments();
      res.send(appointmentList);
    }
  }
}