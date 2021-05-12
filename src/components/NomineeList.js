import React from 'react';
import Nominee from './Nominee';

const NomineeList = ({ nominees }) => {
  return (
    <ul className="nominees-winners">
      {nominees.map(nominee => {
        return (
          <Nominee key={`${nominee.artist}-${nominee.title}`} {...nominee} />
        );
      })}
    </ul>
  );
};
export default NomineeList;
