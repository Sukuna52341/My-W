import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../models/reservation.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[] = [];
  name: string = '';
  email: string = '';
  phone: string = '';
  numberOfGuests: number = 1;
  date: string = '';
  time: string = '';
  specialRequests: string = '';
  successMessage: string = '';  

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationService.getReservations().subscribe(
      (reservations: Reservation[]) => this.reservations = reservations,
      (error: any) => console.error('Error loading reservations', error)
    );
  }

  onSubmit(): void {
    const newReservation: Reservation = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      numberOfGuests: this.numberOfGuests,
      date: this.date,
      time: this.time,
      specialRequests: this.specialRequests
    };

    this.reservationService.createReservation(newReservation).subscribe(
      (reservation: Reservation) => {
        this.reservations.push(reservation);
        console.log('Reservation created successfully', reservation);
        this.successMessage = 'Table successfully booked!';  // Display success message
      },
      (error: any) => console.error('Error creating reservation', error)
    );
  }
}
