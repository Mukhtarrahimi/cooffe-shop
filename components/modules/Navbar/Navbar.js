import React, { useEffect, useState } from 'react';
import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Fontawesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch(router.query.q || '');
  }, [router.query.q]);

  const searchHandlerWithEnter = (event) => {
    if (event.keyCode === 13 && search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };

  const searchHandler = () => {
    if (search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };

  const isActive = (path) => router.pathname === path;

  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <div className="d-flex align-items-center position-relative">
          <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
            <h1 className="m-0 display-4 text-uppercase text-white">
              Next-Coffee
            </h1>
          </Link>

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={searchHandlerWithEnter}
            type="text"
            className={styles.search_input}
            placeholder="Search..."
          />
          <FontAwesomeIcon
            onClick={searchHandler}
            className={styles.search_icon}
            icon={faSearch}
          />
        </div>

        <div
          className={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            <Link
              href="/"
              className={`${styles.nav_link} ${
                isActive('/') ? styles.active_nav_link : ''
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`${styles.nav_link} ${
                isActive('/about') ? styles.active_nav_link : ''
              }`}
            >
              About
            </Link>

            <Link
              href="/services"
              className={`${styles.nav_link} ${
                isActive('/services') ? styles.active_nav_link : ''
              }`}
            >
              Services
            </Link>

            <Link
              href="/menu"
              className={`${styles.nav_link} ${
                isActive('/menu') ? styles.active_nav_link : ''
              }`}
            >
              Menu
            </Link>

            <div className={`${styles.dropdown}`}>
              <a
                href="#"
                className={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div
                className={`${styles.dropdown_menu} ${styles.text_capitalize}`}
              >
                <Link
                  href="/reservation"
                  className={`${styles.dropdown_item} ${
                    isActive('/reservation') ? styles.active_nav_link : ''
                  }`}
                >
                  Reservation
                </Link>
                <Link
                  href="/testimonial"
                  className={`${styles.dropdown_item} ${
                    isActive('/testimonial') ? styles.active_nav_link : ''
                  }`}
                >
                  Testimonial
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className={`${styles.nav_link} ${
                isActive('/contact') ? styles.active_nav_link : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
