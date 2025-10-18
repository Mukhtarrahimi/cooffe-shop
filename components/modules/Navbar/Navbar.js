import React from 'react';

function Navbar() {
  return (
    <div>
      <nav>
        <a href="index.html">
          <h1>Next-Coffee</h1>
        </a>
        <button type="button">
          <span></span>
        </button>
        <div>
          <div>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="service.html">Service</a>
            <a href="menu.html">Menu</a>
            <div className="dropdown">
              <a href="#">Pages</a>
              <div className="dropdown_menu">
                <a href="reservation.html">Reservation</a>
                <a href="testimonial.html">Testimonial</a>
              </div>
            </div>
            <a href="contact.html">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
