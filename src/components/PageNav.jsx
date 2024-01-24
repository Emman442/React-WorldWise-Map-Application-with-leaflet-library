import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from "./PageNav.module.css"
import Logo from "./Logo"

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      {/* <Logo/> */}
      <Link to="/">
       <Logo/>
      </Link>
      ;
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
