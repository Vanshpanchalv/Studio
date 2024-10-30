import React from 'react';

export default function Footer() {
  return (
    <footer className="simple-footer text-center py-5">
      <div>
        <a className="navbar-brand brand" href="#">
  <h1 className="text" style={{ color: '#000' }}>AD Creatives</h1>
  <small style={{ color: '#000' }}>By Amit Dangi</small>
</a>

        {/* Address */}
        <p className="footer-address">
          C17, Laghu Udyog Kendra, I.B Patel Road, Off Western Express Highway, Goregaon East, Mumbai 400063
        </p>
        
        {/* Contact Information */}
        <p className="footer-contact">
          adcreatives@gmail.com &nbsp; | &nbsp; 9594341765 &nbsp; | &nbsp; 9594179567
        </p>
      </div>
    </footer>
  );
}
