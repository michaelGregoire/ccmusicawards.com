import React from 'react';

const ExternalLink = ({ url, ariaLabel }) => {
  return (
    <a
      href={url}
      aria-label={ariaLabel}
      className="download"
      rel="noopener"
      target="_blank"
    >
      <i className="fas fa-external-link-square-alt"></i>
    </a>
  );
};

export default ExternalLink;
