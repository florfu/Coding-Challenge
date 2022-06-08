import React from 'react';

function Footer() {
  // gets current year
  const copyrightYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-custom text-white w-full h-6 text-center">
      <p className="inset-0">
        Brought to you by Florencia Funes ©
        {' '}
        {copyrightYear}
      </p>
    </footer>
  );
}

export default Footer;
