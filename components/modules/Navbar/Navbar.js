import React from 'react';
import Link from 'next/link';
function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link href="/">Caffora</Link>
        </div>
        <div className="but"></div>
        <div className="bars">
          <ul>
            {
              (links = [
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Service', path: '/services' },
                { name: 'Menu', path: '/menu' },
                {
                  name: 'Pages',
                  dropdown: [
                    { name: 'Reservation', path: '/reservation' },
                    { name: 'Testimonial', path: '/testimonial' },
                  ],
                },
                { name: 'Contact', path: '/contact' },
              ])
            }
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
