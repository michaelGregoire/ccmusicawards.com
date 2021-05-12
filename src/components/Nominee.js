import React from 'react';
import NomineeRegular from './NomineeRegular';
import NomineeWinner from './NomineeWinner';
import getAriaLabel from '../util/getAriaLabel';

const Nominee = ({
  artist,
  title,
  url,
  embedUrl,
  type = 'album', // album, track, video, region
  winner = false,
}) => {
  const ariaLabel = getAriaLabel(type);

  return (
    <li>
      {winner ? (
        <NomineeWinner
          artist={artist}
          title={title}
          url={url}
          ariaLabel={ariaLabel}
          embedUrl={embedUrl}
        />
      ) : (
        <NomineeRegular
          artist={artist}
          title={title}
          url={url}
          ariaLabel={ariaLabel}
          embedUrl={embedUrl}
        />
      )}
    </li>
  );
};

export default Nominee;
