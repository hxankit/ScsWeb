// utils/dataUri.js
import DataURIParser from 'datauri/parser.js';
import path from 'path';

const parser = new DataURIParser();

export const getDataUri = (file) => {
  const extName = path.extname(file.originalname); // .png, .jpg etc.
  return parser.format(extName, file.buffer); // returns object with content (base64)
};
