// src/app/models/reservation.model.ts
export interface Reservation {
    reservation_id?: number;
    name: string;
    email: string;
    phone: string;
    numberOfGuests: number;
    date: string;
    time: string;
    specialRequests?: string;
  }
  