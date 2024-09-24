import React, { useState } from 'react';
import PersistentDrawerLeft2 from '../AdminHome/Navbar2';
import './Booking.css'; // Import the CSS file

const Booking = () => {
  const [formData, setFormData] = useState({
    roomName: '',
    date: '',
    timeSlot: '',
  });

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
    console.log('Room booked:', formData);
  };

  return (
    <>
      <PersistentDrawerLeft2 />
      <div className="room-booking-form">
        <h2 className="form-header">Book a Room</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label className="form-label">Room Name:</label>
            <input
              type="text"
              name="roomName"
              value={formData.roomName}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter room name"
              required
            />
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

          <button type="submit" className="form-button">Book Room</button>
        </form>
      </div>
    </>
  );
};

export default Booking;
