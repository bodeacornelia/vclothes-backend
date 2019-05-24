import { Appointment, User } from '../../entity';
import { STATUS } from '../../constants/AppConstants';


class Service {
  async createAppointment(userId, newAppointment) {
    const user = await User.findOne(userId);

    const appointment = new Appointment();
    Object.assign(appointment, newAppointment);
    
    appointment.category = <any>{id: newAppointment.categoryId};
    appointment.status = <any>{id: STATUS.PENDING};
    appointment.user = user;

    await Appointment.save(appointment);
  }

  async getAllAppointments() {
    return Appointment.find();
  }
}

const AppointmentService = new Service()
Object.freeze(AppointmentService);

export { AppointmentService };