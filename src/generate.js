import flush from 'styled-jsx/server';
import fs from 'fs-extra';
import { readdir } from 'fs/promises';
import prettier from 'prettier';
import path from 'path';
import yaml from 'yamljs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/App';
import Layout from './components/Layout';
import { exit } from 'process';

import validatePage from './util/validatePage';

const env = process.env.NODE_ENV;

function render(file, page, yamlFile) {
  if (env === 'development') {
    validatePage(page, yamlFile);
  }

  const app = ReactDOMServer.renderToString(
    <App
      heading={page.meta.heading}
      categories={page.content.categories}
      body={page.content.body}
    />
  );
  const styles = flush();
  const html = ReactDOMServer.renderToStaticMarkup(
    <Layout app={app} styles={styles} page={page} />
  );
  let htmlWDoc = '<!DOCTYPE html>' + html;
  let prettyHtml = prettier.format(htmlWDoc, { parser: 'html' });
  fs.writeFileSync(file, prettyHtml);
  console.log(`Wrote ${file}`);
}

(async () => {
  const __dirname = path.resolve();
  const buildPath = path.resolve(__dirname, `./build`);
  const yamlPath = path.resolve(__dirname, `./content`);
  const assetPath = path.resolve(__dirname, `./assets`);

  try {
    const files = await readdir(yamlPath);

    await fs.copy(assetPath, buildPath);

    files.forEach(file => {
      const parsedName = `${file.split('.')[0]}.html`;
      const js = yaml.load(`${yamlPath}/${file}`);
      render(`${buildPath}/${parsedName}`, js, file);
    });
  } catch (err) {
    console.error(err);
    exit(1);
  }
})();
