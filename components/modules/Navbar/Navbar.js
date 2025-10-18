import React from 'react';
import Link from 'next/link';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const links = [
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
  ];

  return (
    <div>
      <nav>
        <div className="logo">
          <Link href="/">Caffora</Link>
        </div>
        <div className="btn">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="bars">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.path || '#'}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
