import React, { Fragment } from 'react';
import NomineeList from './NomineeList';

const Category = ({ name, nominees = [], regional = false }) => {
  return (
    <Fragment>
      {regional ? <h4>{name}</h4> : <h3>{name}</h3>}
      {nominees.length > 0 && <NomineeList nominees={nominees} />}
    </Fragment>
  );
};

export default Category;
