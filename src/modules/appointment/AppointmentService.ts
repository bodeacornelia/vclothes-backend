import { Status, Appointment, User, Category } from '../../entity';
import { isEmpty } from 'lodash';
import { XErrorMissingFields } from '../../system/xerrors/XErrorMissingFields';

class Service {
  async createAppointment(newAppointment) {
    if (isEmpty(newAppointment)) {
      const error = new XErrorMissingFields('Appointment details required');
      throw error;
    }
    const category = await Category.findOne(newAppointment.categoryId);
    const user = await User.findOne(newAppointment.userId);
    const status = await Status.findOne(newAppointment.statusId);

    const appointment = new Appointment();
    Object.assign(appointment, newAppointment);
    appointment.category = category;
    appointment.user = user;
    appointment.status = status;

    await Appointment.save(appointment);
  }

  async getAllAppointments() {
    return Appointment.find();
  }
}

const AppointmentService = new Service()
Object.freeze(AppointmentService);

export { AppointmentService };