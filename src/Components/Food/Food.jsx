import React from 'react';
import './Food.css'; // Import the CSS file for styling

const Food = () => {
  return (

    
    <>
    <h1 style={{ backgroundColor: "black", color: "white", marginTop: "100px" }}>Open Buffets</h1>
    
    <div className="cuisine-container">
      <h2 className="cuisine-header">Buffet Options</h2>

      <div className="buffet">
        <img
          src="https://www.keioprelia.co.jp/kyoto/en/breakfast/img/buffet-04.jpg" // Replace with your image path
          alt="Breakfast Buffet"
          className="buffet-image"
        />
        <div className="buffet-description">
          <h3>Breakfast Buffet</h3>
          <p>
            Start your day with a delightful breakfast buffet featuring a variety of fresh fruits, pastries, 
            eggs made to order, and specialty coffee. Enjoy a selection of both sweet and savory dishes to 
            fuel your morning!
          </p>
        </div>
      </div>

      <div className="buffet">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC1pGhW7_BRwnGuBguLE99tfA0faYflekCA&ss" // Replace with your image path
          alt="Lunch Buffet"
          className="buffet-image"
        />
        <div className="buffet-description">
          <h3>Lunch Buffet</h3>
          <p>
            Join us for a vibrant lunch buffet offering a variety of salads, grilled meats, pasta dishes, 
            and seasonal vegetables. Perfect for a quick and satisfying meal, our lunch buffet has something 
            for everyone.
          </p>
        </div>
      </div>

      <div className="buffet">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/029/211/595/small/luxury-food-service-appetisers-and-desserts-served-at-a-restaurant-or-formal-dinner-event-in-classic-english-style-in-the-luxurious-hotel-or-country-estate-generative-ai-photo.jpg" // Replace with your image path
          alt="Dinner Buffet"
          className="buffet-image"
        />
        <div className="buffet-description">
          <h3>Dinner Buffet</h3>
          <p>
            Indulge in an exquisite dinner buffet featuring gourmet dishes from around the world. 
            Enjoy an array of appetizers, main courses, and decadent desserts that will satisfy your 
            evening cravings.
          </p>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Food;
