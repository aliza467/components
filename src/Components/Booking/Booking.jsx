import React, { useState } from 'react';
import PersistentDrawerLeft2 from '../AdminHome/Navbar2';
import './Booking.css'; // Import the CSS file
import Footer from '../Footer/Footer';

const Booking = () => {
  const [formData, setFormData] = useState({
    roomName: '',
    date: '',
    timeSlot: '',
  });
  const [isBooked, setIsBooked] = useState(false); // State to control pop-up visibility

  // Predefined room options for the dropdown
  const roomOptions = ['Resorts rooms', 'Boutique creative rooms', 'Luxury rooms', 'Lodge rooms'];

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

    // Add the new booking to the list
    const updatedBookings = [...existingBookings, formData];

    // Save the updated list to local storage
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    console.log('Room booked:', formData);
    setIsBooked(true); // Show the booking confirmation pop-up
  };

  // Close the pop-up
  const closePopup = () => {
    setIsBooked(false);
  };

  return (
    <>
      <PersistentDrawerLeft2 />
      <div className="room-booking-form">
        <h2 className="form-header">Book a Room</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label className="form-label">Room Name:</label>
            <select
              name="roomName"
              value={formData.roomName}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Room</option>
              {roomOptions.map((room, index) => (
                <option key={index} value={room}>
                  {room}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Booking Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Time Slot:</label>
            <select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Time Slot</option>
              <option value="9am-11am">9 AM - 11 AM</option>
              <option value="11am-1pm">11 AM - 1 PM</option>
              <option value="1pm-3pm">1 PM - 3 PM</option>
              <option value="3pm-5pm">3 PM - 5 PM</option>
            </select>
          </div>

          <button type="submit" className="form-button">
            Book Room
          </button>
        </form>

        {/* Pop-up message */}
        {isBooked && (
          <div className="popup">
            <div className="popup-content">
              <p>Room Booked Successfully!</p>
              <button onClick={closePopup} className="popup-button">Close</button>
            </div>
          </div>
        )}
      </div>

      <Footer/>
    </>
  );
};

export default Booking;
