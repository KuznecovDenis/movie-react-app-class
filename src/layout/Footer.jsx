import React from 'react';

const date = new Date()

const Footer = () => {
  return (
    <footer className="page-footer indigo darken-2">
          <div className="footer-copyright">
            <div className="container">
            © { date.getFullYear() } Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
  );
}

export default Footer;
