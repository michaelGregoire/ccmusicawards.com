import React, { Fragment } from 'react';
import ExternalLink from './ExternalLink';
import Identification from './Identification';
import Trophy from './Trophy';
import Video from './Video';

const NomineeWinner = ({ artist, title, url, ariaLabel, embedUrl = false }) => {
  return (
    <Fragment>
      <Trophy />
      <span className="winner-name">
        {title !== false ? (
          <strong>{artist}</strong>
        ) : (
          <Identification artist={artist} title={title} />
        )}
        <ExternalLink url={url} ariaLabel={ariaLabel} />
      </span>
      {embedUrl && <Video src={embedUrl} />}
      <hr />
    </Fragment>
  );
};

export default NomineeWinner;
