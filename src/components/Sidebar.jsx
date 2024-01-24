
import { Outlet } from "react-router-dom"
import Logo from "./Logo"

import styles from "./Sidebar.module.css"
import AppNav from "./AppNav"

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>
    

        {/* <p>List of Cities</p> */}
        <Outlet/>
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; Copyright {new Date().getFullYear} WorldWise Inc.
            </p>
        </footer>
    </div>
  )
}
