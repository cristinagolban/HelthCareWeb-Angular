import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointments: Appointment[] = []

  columnsToDisplay = ['Patient', 'Doctor', 'Date', 'Time', 'Description'];


  constructor(
    private appointmentService: AppointmentService) {
  }

  ngOnInit() {
    this.appointmentService.getAppointmentsByPatient().subscribe(res => this.appointments = res);
  }

}
