import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <h3>Contact Us</h3>
      <ul className="contacts">
        <li className="social">
          <a href="https://twitter.com/ccmusicawards" title="CCMA at Twitter">
            <i className="fab fa-twitter-square"></i>
          </a>
        </li>
        <li className="social">
          <a
            href="https://www.facebook.com/ccmusicawards"
            title="CCMA at Facebook"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          {` `}
          <a href="#" className="ccma">
            CCMA Judges
          </a>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          {` `}
          <a href="#" className="ccmaadmin">
            CCMA Questions
          </a>
        </li>
      </ul>
      <p className="disclaimer">
        <strong>CC Music Awards</strong> is not a{` `}
        <a href="https://creativecommons.org/">Creative Commons Corporation</a>
        {` `}project.
      </p>
    </Fragment>
  );
};

export default Footer;
