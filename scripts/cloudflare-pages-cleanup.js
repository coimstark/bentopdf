import fs from 'node:fs';

const file = 'dist/libreoffice-wasm/soffice.data.gz';

if (fs.existsSync(file)) {
  fs.rmSync(file, { force: true });
  console.log(
    `Removed ${file} because Cloudflare Pages max file size is 25 MiB`
  );
}
