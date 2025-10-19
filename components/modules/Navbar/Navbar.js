'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <div className="bg-[#33211d] fixed w-full z-50">
      <nav className="flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <div className="logo text-white text-2xl font-semibold">
          <Link href="/">Caffora</Link>
        </div>

        {/* دکمه موبایل */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden cursor-pointer"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </div>

        {/* منو */}
        <ul
          className={`absolute md:static top-16 left-0 w-full bg-[#33211d]
            flex flex-col md:flex-row items-center md:items-center justify-center md:justify-end gap-6 md:gap-4
            transition-all duration-300 ${
              menuOpen ? 'flex' : 'hidden md:flex'
            }`}
        >
          {links.map((link, index) => (
            <li
              key={index}
              className={`relative group ${index === 0 ? 'mt-4 md:mt-0' : ''}`}
              ref={link.dropdown ? dropdownRef : null}
            >
              {link.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === link.name ? null : link.name
                      )
                    }
                    className={`flex items-center justify-center px-6 py-3 md:px-4 md:py-2 w-48 md:w-auto h-12 md:h-auto text-white rounded-lg md:rounded-none
                      hover:text-yellow-400 transition-colors ${
                        pathname.startsWith(link.path) ? 'text-yellow-400' : ''
                      }`}
                  >
                    {link.name}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-2 text-xs"
                    />
                  </button>

                  <ul
                    className={`${
                      dropdownOpen === link.name ? 'flex' : 'hidden'
                    } flex-col md:absolute md:top-12 md:left-0 bg-[#442e29] rounded-md shadow-lg w-48`}
                  >
                    {link.dropdown.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.path}
                          className="block px-4 py-2 text-white hover:text-yellow-400"
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={link.path}
                  className={`flex items-center justify-center px-6 py-3 md:px-4 md:py-2 w-48 md:w-auto h-12 md:h-auto text-white rounded-lg md:rounded-none
                    hover:text-yellow-400 transition-colors ${
                      pathname === link.path ? 'text-yellow-400' : ''
                    }`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
