export default (page, file) => {
  if (!page.hasOwnProperty('meta')) {
    throw new Error(`${file} — requires meta`);
  }

  if (!page.meta.hasOwnProperty('title')) {
    throw new Error(`${file} — meta requires a title`);
  }

  if (!page.meta.hasOwnProperty('heading')) {
    throw new Error(`${file} — meta requires a heading`);
  }

  if (!page.meta.hasOwnProperty('description')) {
    throw new Error(`${file} — meta requires a description`);
  }

  if (!page.hasOwnProperty('content')) {
    throw new Error(`${file} — requires content`);
  }

  if (page.content.hasOwnProperty('categories')) {
    if (!(page.content.categories instanceof Array)) {
      throw new Error(`${file} — categories needs to be an array`);
    }

    page.content.categories.map(category => {
      if (!category.hasOwnProperty('name')) {
        throw new Error(`${file} — each category requires a name`);
      }

      if (category.nominees) {
        if (!(category.nominees instanceof Array)) {
          throw new Error(`${file} — nominees needs to be an array`);
        }

        category.nominees.map(nominee => {
          if (!nominee.hasOwnProperty('artist')) {
            throw new Error(`${file} — each nominee needs an artist`);
          }

          if (!nominee.hasOwnProperty('url')) {
            throw new Error(`${file} — each nominee needs a url`);
          }

          if (
            nominee.hasOwnProperty('type') &&
            nominee.type === 'video' &&
            !nominee.hasOwnProperty('embedUrl')
          ) {
            throw new Error(`${file} — a video nominee requires an embedUrl`);
          }

          if (
            !nominee.hasOwnProperty('type') ||
            (nominee.hasOwnProperty('type') && nominee.type !== 'region')
          ) {
            if (!nominee.hasOwnProperty('title')) {
              throw new Error(
                `${file} — only region nominees do not need a title`
              );
            }
          }
        });
      }
    });
  }
};
