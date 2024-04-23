'use client';
import InstructionsComponent from "@/components/instructionsComponent";
import styles from "./page.module.css";
import "./globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "@/pages/profile";



export default function Home() {
  return (
    <main className={styles.main}>
      <BrowserRouter>
        <InstructionsComponent />
        <Profile/>
      </BrowserRouter>
    </main>
  );
}
