import * as fs from 'fs';
import { join } from 'path';
import { ImageDto } from 'src/images/dto/image.dto';

export const saveFileToFolder = (file: ImageDto) => {
  const originalName = file.originalname.split('.');
  const filename = +new Date() + '.' + originalName[originalName.length - 1];
  const dir = 'public/files';

  !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true });

  const stream = fs.createWriteStream(join(dir, filename));
  stream.write(file.buffer);
  stream.end();

  return filename;
};

export const removeFileFromFolder = (file) => {
  const filePath = `public/files/${file}`;

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file: ${err.message}`);
      return;
    }
    console.log(`File was successfully deleted`);
  });
};
