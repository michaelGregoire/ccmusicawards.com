import { readdir } from 'fs/promises';
import path from 'path';
import yaml from 'yamljs';
import { exit } from 'process';
import validatePage from './util/validatePage';

(async () => {
  const __dirname = path.resolve();
  const yamlPath = path.resolve(__dirname, `./content`);

  try {
    const files = await readdir(yamlPath);

    files.forEach(file => {
      const js = yaml.load(`${yamlPath}/${file}`);

      validatePage(js, file);
    });
  } catch (err) {
    console.error(err);
    exit(1);
  }
})();
