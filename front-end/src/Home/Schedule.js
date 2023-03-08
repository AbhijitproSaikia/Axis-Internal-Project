import './Schedule.css'
import Booking from './Booking'
import React, { useState } from 'react';

export default function Schedule(props){

  const userId = props.userId;
  const fromAirport = props.fromAirport;
  const toAirport = props.toAirport;
  const date = props.date;

  console.log(userId)
  console.log(fromAirport)
  console.log(toAirport)
  console.log(date)

  const schedule=[
    {departure_time:'11:00 AM',arrival_time:'1:00 PM',flight_duration:'2 Hrs',flight_id:'AIR INDIA 11',plane_name:'A320',price:6000.00},
    {departure_time:'10:00 AM',arrival_time:'3:00 PM',flight_duration:'5 Hrs',flight_id:'INDIGO 11',plane_name:'B747',price:4000.00}
  ]


  const [selectedFlight, setSelectedFlight] = useState(null);
  const [passengerDetails, setPassengerDetails] = useState(false);

  const handleBook = (flight) => {
    setSelectedFlight(flight);
    setPassengerDetails(!passengerDetails);
  };


  return ( 
  <div className="schedule">
        {schedule.map((flight) => (
          <li key={flight.flight_id}>
            <strong>{flight.flight_id}</strong>
            <ul>
              <li>Departure Time: {flight.departure_time} - | | - Arrival Time: {flight.arrival_time}</li>
              <li>Flight Duration: {flight.flight_duration} Plane Name: {flight.plane_name}</li>
              <li>Price: {flight.price}</li>
              <h2>Price: {flight.price}</h2>
              
            </ul>
            <button onClick={() => handleBook(flight)}>Book</button>
            {passengerDetails}
          </li>
        ))}
        <div>{passengerDetails && <div><Booking
        userId={userId}
        fromAirport={fromAirport}
        toAirport={toAirport}
        date={date}
        departureTime={selectedFlight?.departure_time}
        arrivalTime={selectedFlight?.arrival_time}
        flightDuration={selectedFlight?.flight_duration}
        planeName={selectedFlight?.plane_name}
        t_price={selectedFlight?.price}
        flightId={selectedFlight?.flight_id}

        />
        </div>}
        </div>
      </div>
      
  )
}

