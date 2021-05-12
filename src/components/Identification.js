import React, { Fragment } from 'react';

const Identification = ({ artist, title = false }) => {
  const strongClassName = title ? '' : 'regional';
  return (
    <Fragment>
      <strong className={strongClassName}>{artist}</strong>
      {title && (
        <Fragment>
          {' '}
          <em>{title}</em>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Identification;
