import React, { useEffect, useState } from 'react';
import PersistentDrawerLeft from '../Navbar';
import './BookedRoom.css'; // Import the CSS file for styling
import Footer from '../Footer/Footer';

const BookedRooms = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings from local storage when the component mounts
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(savedBookings);
  }, []);

  return (
   <>
       <div className="booked-rooms-container">
      <PersistentDrawerLeft />
      <h2 className="booked-rooms-header">Booked Rooms</h2>
      {bookings.length > 0 ? (
        <table className="booked-rooms-table">
          <thead>
            <tr>
              <th>Room Name</th>
              <th>Date</th>
              <th>Time Slot</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.roomName}</td>
                <td>{booking.date}</td>
                <td>{booking.timeSlot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-bookings-message">No bookings available.</p>
      )}
      
    </div>

    <Footer/>
   </>
  );
};

export default BookedRooms;

