import React from 'react'
import Sidebar from '../components/Sidebar'
import styles from "./AppLayout.module.css"
import Map from '../components/Map';
import User from '../components/User';
import { useAuth } from '../contexts/FakeAuthContext';

export default function AppLayout() {
  const { user } = useAuth()
  return (
    <div className={styles.app}>
      
      <Sidebar />
      <Map/>
      {/* {user && <User/>} */}
      <User/>
    </div>
  );
}
