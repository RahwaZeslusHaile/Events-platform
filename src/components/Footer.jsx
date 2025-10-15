import React from "react";
import "../componentStyle/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Event Platform | Built by Rahwa</p>
    </footer>
  );
}
