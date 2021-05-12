import React, { Fragment } from 'react';
import ExternalLink from './ExternalLink';
import Identification from './Identification';
import Video from './Video';

const NomineeRegular = ({
  artist,
  title,
  url,
  ariaLabel,
  embedUrl = false,
}) => {
  return (
    <Fragment>
      <Identification artist={artist} title={title} />
      <ExternalLink url={url} ariaLabel={ariaLabel} />
      {embedUrl && <Video src={embedUrl} />}
    </Fragment>
  );
};

export default NomineeRegular;
