import React from 'react';

function Footer() {
  // gets current year
  const copyrightYear = new Date().getFullYear();

  return (
    <footer className="text-slate-600 w-full h-6 text-center">
      <p className="inset-0">
        Developed by Florencia Funes ©
        {' '}
        {copyrightYear}
      </p>
    </footer>
  );
}

export default Footer;
