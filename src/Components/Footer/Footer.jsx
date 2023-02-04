import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Delight Villa | Luxury Private Pool Villa </h2>
      <p>
        &copy; <span>{year}</span> Delightvilla.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/imvshah105"
        >
          Vinay Shah
        </a>
      </p>
    </footer>
  );
}
