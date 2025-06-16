import React from "react";
import { social } from "../data/dummydata";

function Footer() {
  return (
    <>
      <footer>
        {social.map((item, i) => (
          <i key={i}>{<item.icon />}</i>
        ))}
        <p>All Right Rescved 2025</p>
      </footer>
    </>
  );
}

export default Footer;
