export default type => {
  switch (type) {
    case 'track':
      return 'Official track page';
    case 'video':
      return 'Official website';
    case 'region':
      return 'Official website';
    default:
      return 'Official release page';
  }
};
