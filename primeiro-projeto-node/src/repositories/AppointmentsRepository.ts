import { isEqual, startOfHour } from 'date-fns';
import Appointment from '../model/Appointment';

// Data Transfer Object
interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[]; // Array<Appointment>

  constructor() {
    this.appointments = [];
  }

  public all(): Array<Appointment> {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findedAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date)
    );
    return findedAppointment || null;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
