
'use client'

import { ConnectKitButton } from "connectkit";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="carbonsoko.org" target={"_blank"}>
        <p>Carbon Soko</p>
      </a>
      <ConnectKitButton />
    </nav>
  );
}
