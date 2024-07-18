import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


private apiUrl = "http://localhost:3000"
private reservations: Reservation[] = [];

 constructor(private http: HttpClient){

 }
 /*constructor(){
  let savedReservations = localStorage.getItem("reservations");
  this.reservations = savedReservations? JSON.parse(savedReservations) : [];
 }*/
 // CRUD
 getReservations(): Observable<Reservation[]>{
  return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
 }

 getReservation(id: string): Observable<Reservation> {
  return this.http.get<Reservation>(this.apiUrl + "/reservation/"+id);

 }
 addReservation(reservation: Reservation): Observable<void> {
  return this.http.post<void>(this.apiUrl + "/reservation", reservation);
  /*reservation.id = Date.now().toString();
  this.reservations.push(reservation);
  //localStorage.setItem("reservations",JSON.stringify(this.reservations));
  console.log(this.reservations);
*/

 }
 deleteReservation(id: string): Observable<void>{
  return this.http.delete<void>(this.apiUrl + "/reservation/"+id);
 //localStorage.setItem("reservations",JSON.stringify(this.reservations));
 }

 updateReservation(id: string, updateReservation: Reservation):Observable<void>{
  return this.http.put<void>(this.apiUrl + "/reservation/"+ id, updateReservation);
  
  //let index = this.reservations.findIndex(res=> res.id === id);
 // this.reservations[index] = updateReservation
  //localStorage.setItem("reservations",JSON.stringify(this.reservations));
}

}
