import { getRepository } from "typeorm";
import Category from "../../../entity/Category";
import User from "../../../entity/User";
import Appointment from "../../../entity/Appointment";
import Status from "../../../entity/Status";

class AppointmentService {
  async createAppointment(newAppointment) {
    const categoryRepository = getRepository(Category);
    const category = await categoryRepository.findOne({ category: newAppointment.category });

    const userRepository = getRepository(User);
    const user = await userRepository.findOne(newAppointment.userId);

    const statusRepository = getRepository(Status);
    const status = await statusRepository.findOne(newAppointment.statusId);

    const appointment = new Appointment();
    appointment.appointment = newAppointment.appointment;
    appointment.hour = newAppointment.hour;
    appointment.category = category;
    appointment.user = user;
    appointment.status = status;

    const appointmentRepository = getRepository(Appointment);
    await appointmentRepository.save(appointment);
  }

  async getAllAppointments() {
    let appointmentRepository = getRepository(Appointment);
    const appointments = await appointmentRepository.find();
    return appointments;
  }
}

export default new AppointmentService();